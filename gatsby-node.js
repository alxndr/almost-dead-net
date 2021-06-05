const axios = require('axios')
const csv = require('papaparse')
const omit = require('lodash/omit')
const {filter, propEq} = require('ramda')
const slugify = require('slugify')
const LoadablePlugin = require('@loadable/webpack-plugin')

const URL_BASE = 'https://gist.githubusercontent.com/alxndr/5f64cf477d5202c004856772ad2222db/raw/3872276ba57a85ca7afa451619a1777d46cae8a7'
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

const ShowPage = require.resolve('./src/pages/show.js')
const ShowEmbedPage = require.resolve('./src/pages/show-embed.js')
const SongPage = require.resolve('./src/pages/song.js')
const VenuePage = require.resolve('./src/pages/venue.js')

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

exports.onCreatePage = async ({page, actions: {createPage, deletePage}}) => {
  switch (page.internalComponentName) {
    case 'Component/home/': {
      const songs = Object.values(await fetchCSVintoObject(ENDPOINTS.SONGS_URL, (song) => !!song.title))
      const shows = Object.values(await fetchCSVintoObject(ENDPOINTS.SHOWS_URL, (show) => !!show.date))
      const venues = Object.values(await fetchCSVintoObject(ENDPOINTS.VENUES_URL, (venue) => !!venue.name && !!venue.location))
        .map((venue) => ({...venue, name: venue.name.replace(/:/, '')}))
      deletePage(page)
      createPage({
        ...page,
        path: '/', // note the path does not match the filename within src/pages/ ; this gives us control over the context provided to the component
        context: {
          ...page.context,
          shows,
          songs,
          venues,
        },
      })
      break
    }
    case 'Component/songs/': {
      const songs = Object.values(await fetchCSVintoObject(ENDPOINTS.SONGS_URL, (song) => !!song.title))
      const teases = Object.values(await fetchCSVintoObject(ENDPOINTS.TEASES_URL, (tease) => !!tease.performance_id))
      deletePage(page)
      createPage({
        ...page,
        path: '/songs',
        context: {
          ...page.context,
          songs,
          teases,
        },
      })
      break
    }
    default:
      break
  }
}

exports.createPages = async ({ actions: { createPage } }) => {
  const showsObj = await fetchCSVintoObject(ENDPOINTS.SHOWS_URL, (show) => !!show.date)
  const shows = Object.values(showsObj)
  const lastShowId = shows.reduce((acc, elem) => Number(acc.id) > Number(elem.id) ? acc : elem, []).id
  const venuesObj = await fetchCSVintoObject(ENDPOINTS.VENUES_URL, (venue) => !!venue.name && !!venue.location)
  const venues = Object.values(venuesObj)
  const sets = Object.values(await fetchCSVintoObject(ENDPOINTS.SETS_URL, (set) => !!set.id))
    .map((obj) => omit(obj, ['song performances', '']))
  const songs = Object.values(await fetchCSVintoObject(ENDPOINTS.SONGS_URL, (song) => !!song.title))
  const performances = Object.values(await fetchCSVintoObject(ENDPOINTS.SONG_PERFORMANCES_URL, (perf) => !!perf.song_id))
  const teases = Object.values(await fetchCSVintoObject(ENDPOINTS.TEASES_URL, (tease) => !!tease.performance_id))
  const segues = Object.values(await fetchCSVintoObject(ENDPOINTS.SEGUES_URL, (segue) => !!segue.from_perf_id))
  const guests = Object.values(await fetchCSVintoObject(ENDPOINTS.GUESTS_URL, (guest) => !!guest.name))
  const recordings = Object.values(await fetchCSVintoObject(ENDPOINTS.RECORDINGS_URL, (recording) => !!recording.url))

  shows.forEach((show) => {
    createPage({
      path: `/show/embed/${show.id}`,
      component: ShowEmbedPage,
      context: {
        show,
        sets,
        venue: venuesObj[show.venue_id.toString()],
        guests,
        performances,
        segues,
        songs,
        teases,
      }
    })
    createPage({
      path: `/show/${show.id}`,
      component: ShowPage,
      context: {
        show,
        shows,
        sets,
        venue: venuesObj[show.venue_id.toString()],
        guests,
        recordings: filter(propEq('show', show.id))(recordings),
        performances,
        segues,
        songs,
        teases,
        lastShowId,
      }
    })
  })

  songs.forEach((song) => {
    const teaseRows = filter(propEq('song_id', song.id))(teases)
    const teasePerfIds = teaseRows.map((row) => row.performance_id)
    createPage({
      path: `/song/${song.id}`,
      component: SongPage,
      context: {
        song,
        shows,
        sets,
        songs,
        songPerformances: filter(propEq('song_id', song.id))(performances),
        teases: teaseRows,
        teasePerformances: filter((perf) => teasePerfIds.includes(perf.id))(performances),
      }
    })
  })

  venues.forEach((venue) => {
    createPage({
      path: `/venue/${venue.id}-${slugify(venue.name)}`,
      component: VenuePage,
      context: {
        venue,
        shows: filter(propEq('venue_id', venue.id))(shows),
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (
    stage === "build-javascript" ||
    stage === "develop" ||
    stage === "develop-html"
  ) {
    actions.setWebpackConfig({
      plugins: [
        new LoadablePlugin({
          filename:
            stage === "develop"
              ? `public/loadable-stats.json`
              : "loadable-stats.json",
          writeToDisk: true
        })
      ]
    });
  }
};
