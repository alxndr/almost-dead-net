import Papa from 'papaparse'
import {
  storageAvailable,
  urlToKey,
  urlToKeyCSV,
} from './fetch.helpers'

/**
 * Retrieve data for the given URL, either from localStorage (if available) or the network.
 * TODO:
 * - store & check age of data in localStorage
 * - versioning the data??
 */
export async function fetchWithCache(url, transformer = (text) => text) {
  if (!localStorage) {
    // TODO handle if no localStorage
    throw new Error("Ruh roh, no localStorage")
  }
  if (!storageAvailable('localStorage')) {
    throw new Error("Ruh roh, localStorage doesn't look healthy...") // ...or return Promise.reject(new Error()) ?
  }
  const urlPath = urlToKeyCSV(url)
  const rawStoredPayload = localStorage.getItem(urlPath)
  if (rawStoredPayload) {
    return rawStoredPayload
  }
  const data = await fetch(url)
  if (!data.ok) {
    throw new Error('Uh oh, could not fetch...', {url, data}) // ...or return Promise.reject(new Error()) ?
  }
  const text = await data.text()
  localStorage.setItem(urlPath, transformer(text))
  return text
}

export async function parseWithCache(url, callback, papaParseOptions) {
  const data = await fetchWithCache(url)
  return Papa.parse(data, {
    dynamicTyping: true, // TODO remove this... gonna do some conversions ourselves though
    header: true,
    complete: (response) => {
      if (!response)
        throw new Error('parseWithCache: No response when fetching', {url})
      const {data, errors} = response
      if (errors.length)
        throw new Error('parseWithCache: Error fetching', {url, response})
      return callback(data)
    },
    ...papaParseOptions,
  })
}

export async function parseIntoObjectWithCache(url, callback, papaParseOptions = {}, isValidEntry = (_) => true) {
  if (!localStorage) {
    // TODO handle if no localStorage
    throw new Error("Ruh roh, no localStorage")
  }
  if (!storageAvailable('localStorage')) {
    throw new Error("Ruh roh, localStorage doesn't look healthy...") // ...or return Promise.reject(new Error()) ?
  }
  const key = `${urlToKey(url)}.obj.str`
  const objectString = localStorage.getItem(key)
  if (objectString) {
    return callback(JSON.parse(objectString)) // TODO handle if this throws
  }
  const data = await fetch(url)
  if (!data.ok) {
    throw new Error('Uh oh, could not fetch...', {url, data}) // ...or return Promise.reject(new Error()) ?
  }
  const rawText = await data.text()
  /* Return an object containing the data within the CSV rows, using each row's `id` value as the key
   * within the object. This is ideal for accessing values when the ID is known.
   */
  function transform(data) {
    return data.reduce((transformed, elem) => {
      if (isValidEntry(elem)) {
        transformed[elem.id] = elem
      }
      return transformed
    }, {})
  }
  return Papa.parse(rawText, {
    dynamicTyping: true, // TODO remove this... gonna do some conversions ourselves though
    header: true,
    complete: (response) => {
      if (!response)
        throw new Error('parseIntoObjectWithCache: No response when fetching', {url})
      const {data, errors} = response
      if (errors.length)
        throw new Error('parseIntoObjectWithCache: Error fetching', {url, response})
      const transformedData = transform(data)
      localStorage.setItem(key, JSON.stringify(transformedData))
      return callback(transformedData)
    },
    ...papaParseOptions,
  })
}
