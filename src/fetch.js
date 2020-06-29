import Papa from 'papaparse'

const defaultPapaParseOptions = {
  download: true,
  dynamicTyping: true, // TODO remove this... gonna do some conversions ourselves though
  header: true,
  worker: true,
}

export function getCsv(csvUrl, callback, papaParseOptions = {}) {
  return Papa.parse(csvUrl, {
    ...papaParseOptions,
    ...defaultPapaParseOptions,
    complete: (response) => {
      if (!response)
        throw new Error('No response when fetching', {csvUrl})
      const {data, errors} = response
      if (errors.length)
        throw new Error('Error fetching', {csvUrl, response})
      return callback(data)
    },
  })
}
