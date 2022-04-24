const slugify = require('slugify')
const LoadablePlugin = require('@loadable/webpack-plugin')

const ShowTemplate = require.resolve('./src/templates/show.js')
const ShowEmbedTemplate = require.resolve('./src/templates/show-embed.js')
const SongTemplate = require.resolve('./src/templates/song.js')
const VenueTemplate = require.resolve('./src/templates/venue.js')

exports.createSchemaCustomization = ({actions: {createTypes}}) => {
  // n.b. this is GraphQL "SDL"
  createTypes(`
    type GuestsCsv implements Node {
      instrument: String
      jsonId: String
      name: String
      shows: String
      sortVal: String
    }
    type RecordingsCsv implements Node {
      jsonId: String
      show: ShowsCsv @link
      type: String
      url: String
    }
    type SeguesCsv implements Node {
      jsonId: String
    }
    type SetsCsv implements Node {
      jsonId: String
      setlist: String
    }
    type ShowsCsv implements Node {
      date: Date
      encore1: Int
      encore2: Int
      event: String
      jsonId: String
      links: String
      notes: String
      num_recordings: Int
      set1: Int
      set2: Int
      set3: Int
      soundcheck: Int
      tagline: String
      venue: VenuesCsv @link(from: "venue_id" by: "jsonId")
    }
    type SongperformancesCsv implements Node {
      jsonId: String
      set: SetsCsv @link(from: "set_id" by: "jsonId")
      show: ShowsCsv @link(from: "show_id" by: "jsonId")
      song: SongsCsv @link(from: "song_id" by: "jsonId")
      song_name: String
      stars: Int
      variation: String
    }
    type SongsCsv implements Node {
      author: String
      core_jrad: Boolean
      core_gd: Boolean
      cover_gd: Boolean
      jsonId: String
      performances: String
      performed: [SongperformancesCsv]
      suite: String
      teased: [TeasesCsv]
      title: String
    }
    type TeasesCsv implements Node {
      by: String
      jsonId: String
      notes: String
      performance: SongperformancesCsv @link(from: "performance_id" by: "jsonId")
      song: SongsCsv @link(from: "song_id" by: "jsonId")
      song_name: String
      within: String
    }
    type VenuesCsv implements Node {
      jsonId: String
      location: String
      name: String
    }
  `)
}

exports.createPages = async ({graphql, actions: {createPage, createTypes} }) => {
  const result = await graphql(`
    query Everything {
      allVenuesCsv {
        nodes {
          jsonId
          name
        }
      }
      allSongsCsv {
        nodes {
          jsonId
          title
        }
      }
      allShowsCsv {
        nodes {
          date
          jsonId
          venue {
            jsonId
          }
        }
      }
    }
  `)
  const {
    allShowsCsv: {nodes: shows},
    allSongsCsv: {nodes: songs},
    allVenuesCsv: {nodes: venues},
  } = result.data
  global.console.log(shows[0])
  global.console.log(songs[0])
  global.console.log(venues[0])
  if (!venues.find(v => v.name)) {
    global.console.log('venues missing name...........')
    global.console.log(result)
  }
  const lastShowId = Math.max(...shows.map(show => show.jsonId)) // TODO pull this with graphql

  shows.filter(show => show.date).forEach((show) => {
    createPage({
      path: `/show/embed/${show.jsonId}`,
      component: ShowEmbedTemplate,
      context: {
        showId: show.jsonId,
      },
    }); // semicolon needed to separate the two calls to `createPage`
    createPage({
      path: `/show/${show.jsonId}`,
      component: ShowTemplate,
      context: {
        showId: show.jsonId,
        lastShowId,
      }
    })
  })

  songs.filter(song => song.title && song.title !== '[unknown]').forEach((song) => {
    createPage({
      path: `/song/${song.jsonId}`,
      component: SongTemplate,
      context: {
        songId: song.jsonId,
      }
    })
  })

  venues.filter(venue => venue.name).forEach(venue => {
    createPage({
      path: `/venue/${venue.jsonId}-${slugify(venue.name)}`,
      component: VenueTemplate,
      context: {
        venueId: venue.jsonId,
      },
    })
  })
}

