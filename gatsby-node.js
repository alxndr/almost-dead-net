const path = require('path')
const axios = require('axios')
const csv = require('papaparse')

const ENDPOINTS = require('./src/data/urls.js')

async function fetchCSVintoObject(url, isValidEntry) {
  const {data} = await axios.get(url)
  let resolve = () => {}
  const promise = new Promise((res) => {
    resolve = res
  })
  csv.parse(data, {
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

exports.createPages = async ({ actions: { createPage } }) => {
  const shows = await fetchCSVintoObject(ENDPOINTS.SHOWS_URL, (show) => !!show.date)
  const venues = await fetchCSVintoObject(ENDPOINTS.VENUES_URL, (venue) => !!venue.name && !!venue.location)
  //const sets = await fetchCSVintoObject(ENDPOINTS.SETS_URL, (set) => !!set.date)
  //const songs = await fetchCSVintoObject(ENDPOINTS.SONGS_URL, (song) => !!song.title)
  //const songPerformances = await fetchCSVintoObject(ENDPOINTS.SONG_PERFORMANCES_URL, (perf) => !!perf.song_id)
  //const teases = await fetchCSVintoObject(ENDPOINTS.TEASES_URL, (tease) => !!tease.performance_id)
  //const guests = await fetchCSVintoObject(ENDPOINTS.GUESTS_URL, (guest) => !!guest.name)
  //const recordings = await fetchCSVintoObject(ENDPOINTS.RECORDINGS_URL, (recording) => !!recording.url)

  createPage({
    path: '/',
    component: path.resolve('./src/pages/home.jsx'),
    context: { shows, venues }
  })

  //shows.forEach((show) => {
  //  createPage({
  //    path: `/show/${show.id}`, // TODO add slug
  //    component: './src/templates/show.js',
  //    context: {shows, sets, venues, guests, recordings}
  //  })
  //})

  //songs.forEach((song) => {
  //  createPage({
  //    path: `/song/${song.id}`, // TODO add slug
  //    component: './src/templates/song.js',
  //    context: {shows, sets, songs, songPerformances, teases}
  //  })
  //})
}
