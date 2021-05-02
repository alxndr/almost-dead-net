const {filter, propEq} = require('ramda')
const slugify = require('slugify')

const ShowPage = require.resolve('./src/templates/show.js')
const ShowEmbedPage = require.resolve('./src/templates/show-embed.js')
const SongPage = require.resolve('./src/templates/song.js')
const VenueTemplate = require.resolve('./src/templates/venue.js')

exports.createPages = async ({graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query Everything {
      allVenuesCsv {
        nodes {
          id
          name
          location
          capacity
          generic_name
          tagname
        }
      }
      allTeasesCsv {
        nodes {
          id
          by
          notes
          performance_id
          song_id
          song_name
          within
        }
      }
      allSongsCsv {
        nodes {
          author
          core_gd
          core_jrad
          cover_gd
          id
          nicknames
          performances
          suite
          title
        }
      }
      allSongperformancesCsv {
        nodes {
          id
          next_perfid
          prev_perfid
          prev_show_id
          notes
          set_id
          show_id
          showgap
          song_id
          song_name
          variation
        }
      }
      allShowsCsv {
        nodes {
          date
          encore1
          encore2
          event
          id
          links
          notes
          num_recordings
          set1
          set2
          set3
          soundcheck
          tagline
          venue_id
        }
      }
      allSetsCsv {
        nodes {
          id
          setlist
          song_performances
        }
      }
      allSeguesCsv {
        nodes {
          id
          from_perf_id
          notes
          to_perf_id
          type
        }
      }
      allRecordingsCsv {
        nodes {
          date
          id
          show
          url
          type
        }
      }
      allGuestsCsv {
        nodes {
          id
          instrument
          name
          shows
        }
      }
    }
  `)
  const {
    allShowsCsv: {nodes: shows},
    allVenuesCsv: {nodes: venues},
  } = result.data
  const lastShowId = shows.reduce((acc, elem) => Number(acc.id) > Number(elem.id) ? acc : elem, []).id
  const sets = result.data.allSetsCsv.nodes
  const songs = result.data.allSongsCsv.nodes
  const performances = result.data.allSongperformancesCsv.nodes
  const teases = result.data.allTeasesCsv.nodes
  const segues = result.data.allSeguesCsv.nodes
  const guests = result.data.allGuestsCsv.nodes
  const recordings = result.data.allRecordingsCsv.nodes

  shows.forEach((show) => {
    const showVenueId = show.venue_id.toString()
    const venue = venues.find(venue => venue.id === showVenueId)
    createPage({
      path: `/show/embed/${show.id}`,
      component: ShowEmbedPage,
      context: {
        show,
        sets,
        venue,
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
        venue,
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

  venues.forEach(venue => {
    createPage({
      path: `/venue/${venue.id}-${slugify(venue.name)}`,
      component: VenueTemplate,
      context: {
        venueId: venue.id,
      },
    })
  })
}
