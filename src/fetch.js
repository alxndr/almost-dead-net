import Papa from 'papaparse'

export function getCsv(csvUrl, callback, papaParseOptions = {}) {
  throw new Error('getCsv has been deprecated... check out the new hotness: fetchWithCache')
}

/**
 * Determine whether localStorage is available and behaves to spec.
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 *
 * @returns {boolean} whether or not the current environment correctly implements localStorage
 */
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}

/**
 * Retrieve data for the given URL, either from localStorage (if available) or the network.
 * TODO:
 * - store & check age of data in localStorage
 * - versioning the data??
 */
export async function fetchWithCache(url) {
  if (!localStorage) {
    throw new Error("Ruh roh, no localStorage")
  }
  if (!storageAvailable('localStorage')) {
    throw new Error("Ruh roh, localStorage doesn't look healthy...") // ...or return Promise.reject(new Error()) ?
  }
  const urlPath = url.split('/').slice(-2).join('/') // assumes the URL is a raw Gist URL
  const rawStoredPayload = localStorage.getItem(urlPath)
  if (rawStoredPayload) {
    return rawStoredPayload
  }
  const data = await fetch(url)
  if (!data.ok) {
    throw new Error('Uh oh, could not fetch...', {url, data}) // ...or return Promise.reject(new Error()) ?
  }
  const text = await data.text()
  localStorage.setItem(urlPath, text)
  return text
}

export async function parseWithCache(url, callback, papaParseOptions) {
  const data = await fetchWithCache(url)
  return Papa.parse(data, {
    dynamicTyping: true, // TODO remove this... gonna do some conversions ourselves though
    header: true,
    complete: (response) => {
      if (!response)
        throw new Error('getCsvWithCache: No response when fetching', {url})
      const {data, errors} = response
      if (errors.length)
        throw new Error('getCsvWithCache: Error fetching', {url, response})
      return callback(data)
    },
    ...papaParseOptions,
  })
}
