require('logrocket').init('wi5hyr/a-dn')

const axios = require('axios')
const csv = require('papaparse')
const omit = require('lodash/omit')

const URL_BASE = 'https://gist.githubusercontent.com/alxndr/5f64cf477d5202c004856772ad2222db/raw/a37bb52b9bafbc1ac793168ca542d900a8a24978'
const ENDPOINTS = {
  GUESTS_URL: `${URL_BASE}/guests.csv`,
  RECORDINGS_URL: `${URL_BASE}/recordings.csv`,
  SEGUES_URL: `${URL_BASE}/segues.csv`,
  SETS_URL: `${URL_BASE}/sets.csv`,
  SHOWS_URL: `${URL_BASE}/shows.csv`,
  SONG_PERFORMANCES_URL: `${URL_BASE}/songperformances.csv`,
  SONGS_URL: `${URL_BASE}/songs.csv`,
  TEASES_URL: `${URL_BASE}/teases.csv`,
  VENUES_URL: `${URL_BASE}/venues.csv`,
}

const HomePage = require.resolve('./src/pages/home.js')
const ShowPage = require.resolve('./src/pages/show.js')
const SongPage = require.resolve('./src/pages/song.js')

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

function sanitizeObjectForGraphQL(objectFromCsv) {
  // Gatsby feeds these through GraphQL … https://docs.joshuatz.com/cheatsheets/gatsby-js/
  return Object.values(objectFromCsv)
    .map((obj) => omit(obj, ['song performances', '']))
}

exports.createPages = async ({ actions: { createPage } }) => {
  const shows = Object.values(await fetchCSVintoObject(ENDPOINTS.SHOWS_URL, (show) => !!show.date))
  const venues = Object.values(await fetchCSVintoObject(ENDPOINTS.VENUES_URL, (venue) => !!venue.name && !!venue.location))
  console.log({venues})
  const sets = sanitizeObjectForGraphQL(await fetchCSVintoObject(ENDPOINTS.SETS_URL, (set) => !!set.id))
  const songs = Object.values(await fetchCSVintoObject(ENDPOINTS.SONGS_URL, (song) => !!song.title))
  const performances = Object.values(await fetchCSVintoObject(ENDPOINTS.SONG_PERFORMANCES_URL, (perf) => !!perf.song_id))
  const teases = Object.values(await fetchCSVintoObject(ENDPOINTS.TEASES_URL, (tease) => !!tease.performance_id))
  const segues = Object.values(await fetchCSVintoObject(ENDPOINTS.SEGUES_URL, (segue) => !!segue.id))
  const guests = Object.values(await fetchCSVintoObject(ENDPOINTS.GUESTS_URL, (guest) => !!guest.name))
  const recordings = Object.values(await fetchCSVintoObject(ENDPOINTS.RECORDINGS_URL, (recording) => !!recording.url))

  createPage({
    path: '/', // note the path does not match the filename within src/pages/ ; this gives us control over the context provided to the component
    // ...however `/home` will be a valid but broken page? (like `/show` and `/song` are already?)
    component: HomePage,
    context: {
      shows,
      songs,
      venues,
    }
  })

  shows.forEach((show) => {
    createPage({
      path: `/show/${show.id}`, // TODO add slug
      component: ShowPage,
      context: {
        show,
        shows,
        sets,
        venue: venues[show.venue_id],
        guests,
        recordings,
        performances,
        segues,
        songs,
        teases,
      }
    })
  })

  songs.forEach((song) => {
    createPage({
      path: `/song/${song.id}`,
      component: SongPage,
      context: {
        song,
        shows,
        sets,
        songs,
        songPerformances: performances,
        teases,
      }
    })
  })
}
