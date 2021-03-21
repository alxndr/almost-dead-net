require('logrocket').init('wi5hyr/a-dn')

const axios = require('axios')
const csv = require('papaparse')

const URL_BASE = 'https://gist.githubusercontent.com/alxndr/5f64cf477d5202c004856772ad2222db/raw/faf319e3d91a633199ec7087ae132e7d61bda902'
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

const Show = require.resolve('./src/pages/show.js')

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
  console.log('fetching show data...')
  const shows = await fetchCSVintoObject(ENDPOINTS.SHOWS_URL, (show) => !!show.date)
  console.log(Object.values(shows).length)
  console.log('fetching venue data...')
  const venues = await fetchCSVintoObject(ENDPOINTS.VENUES_URL, (venue) => !!venue.name && !!venue.location)
  //console.log(venues['71'])
  console.log(Object.values(venues).length)
  console.log('fetching set data...')
  const sets = await fetchCSVintoObject(ENDPOINTS.SETS_URL, (set) => !!set.id)
  //console.log(Object.values(sets))
  console.log(Object.values(sets).length)
  console.log('fetching song data...')
  const songs = await fetchCSVintoObject(ENDPOINTS.SONGS_URL, (song) => !!song.title)
  console.log(Object.values(songs).length)
  console.log('fetching performance data...')
  const performances = await fetchCSVintoObject(ENDPOINTS.SONG_PERFORMANCES_URL, (perf) => !!perf.song_id)
  console.log(Object.values(performances).length)
  console.log('fetching tease data...')
  const teases = await fetchCSVintoObject(ENDPOINTS.TEASES_URL, (tease) => !!tease.performance_id)
  console.log(Object.values(teases).length)
  console.log('fetching segue data...')
  const segues = await fetchCSVintoObject(ENDPOINTS.SEGUES_URL, (segue) => !!segue.id)
  console.log(Object.values(segues).length)
  console.log('fetching guest data...')
  const guests = await fetchCSVintoObject(ENDPOINTS.GUESTS_URL, (guest) => !!guest.name)
  console.log(Object.values(guests).length)
  console.log('fetching recording data...')
  const recordings = await fetchCSVintoObject(ENDPOINTS.RECORDINGS_URL, (recording) => !!recording.url)
  console.log(Object.values(recordings).length)
  Object.values(shows).forEach((show) => {
    //console.log('tryna create an individual page:', show)
    createPage({
      path: `/show/${show.id}`, // TODO add slug
      component: Show,
      context: {
        show,
        shows: Object.values(shows),
        setts: JSON.stringify(Object.values(sets)), // Gatsby feeds these through GraphQL … https://docs.joshuatz.com/cheatsheets/gatsby-js/
        venue: venues[show.venue_id],
        guests: Object.values(guests),
        recordings: Object.values(recordings),
        performances: Object.values(performances),
        segues: Object.values(segues),
        songs: Object.values(songs),
        teases: Object.values(teases),
      }
    })
  })
}

//exports.onCreateNode = ({ node }) => {
//  console.log(`Node created of type "${node.internal.type}"`)
//}
