import path from 'path'
import axios from 'axios'
import Papa from 'papaparse'

import {
  SHOWS_URL,
  VENUES_URL,
} from './src/data/urls'

async function fetchCSVintoObject(url, isValidEntry) {
  const {data} = await axios.get(url)
  let resolve = () => {}
  const promise = new Promise((res) => {
    resolve = res
  })
  Papa.parse(data, {
    header: true,
    worker: false,
    complete: (response) => {
      if (!response)
        throw new Error('parseIntoObjectWithCache: No response when fetching', {url})
      const {data = {}, errors} = response
      if (errors.length)
        throw new Error('parseIntoObjectWithCache: Error fetching', {url, response})
      return resolve(data.reduce((transformed, row) => {
        if (isValidEntry(row)) {
          transformed[row.id] = row
        }
        return transformed
      }, {}))
    },
  })
  return promise
}

export default {
  getRoutes: async () => {
    console.log('static config... getRoutes')
    const shows = await fetchCSVintoObject(SHOWS_URL, (rowData) => !!rowData.date)
    const venues = await fetchCSVintoObject(VENUES_URL, (rowData) => !!rowData.name && !!rowData.location)
    return [
      {
        path: '/',
        getData: async () => ({
          shows,
          venues,
        })
      },
      {
        path: '/show',
        children: Object.values(shows).map((showData) => {
          const {id} = showData
          if (!(id % 130)) {
            console.log(showData)
          }
          return {
            path: id.toString(), // relative to parent path
          }
        }),
      },
    ]
  },
  // getSiteData may be necessary?? https://github.com/react-static/react-static/blob/master/docs/config.md#getsitedata
  maxThreads: 1, // be polite on this old Mac
  productionSourceMaps: true,
  siteRoot: 'https://almost-dead.net',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    //require.resolve('react-static-plugin-reach-router'),
    //require.resolve('react-static-plugin-sitemap'),
  ],
}
