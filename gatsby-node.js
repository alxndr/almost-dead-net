const slugify = require('slugify')
const LoadablePlugin = require('@loadable/webpack-plugin')

const ShowTemplate = require.resolve('./src/templates/show.js')
const ShowEmbedTemplate = require.resolve('./src/templates/show-embed.js')
const SongTemplate = require.resolve('./src/templates/song.js')
const VenueTemplate = require.resolve('./src/templates/venue.js')

exports.createSchemaCustomization = ({actions: {createTypes}}) => {
  // n.b. this is GraphQL "SDL"
  createTypes(`
    type guestsCsv implements Node {
      instrument: String
      id: String
      name: String
      shows: String
      sortVal: String
    }
    type recordingsCsv implements Node {
      id: String
      show: showsCsv @link(from: "show" by: "id")
      type: String
      url: String
    }
    type seguesCsv implements Node {
      id: String
    }
    type setsCsv implements Node {
      id: String
      setlist: String
    }
    type showsCsv implements Node {
      date: Date
      encore1: Int
      encore2: Int
      event: String
      id: String
      links: String
      notes: String
      num_recordings: Int
      set1: Int
      set2: Int
      set3: Int
      soundcheck: Int
      tagline: String
      venue: venuesCsv @link(from: "venue_id" by: "id")
    }
    type songperformancesCsv implements Node {
      id: String
      set: setsCsv @link(from: "set_id" by: "id")
      show: showsCsv @link(from: "show_id" by: "id")
      song: songsCsv @link(from: "song_id" by: "id")
      song_name: String
      stars: Int
      variation: String
    }
    type songsCsv implements Node {
      author: String
      core_jrad: Boolean
      core_gd: Boolean
      cover_gd: Boolean
      id: String
      performances: String
      performed: [songperformancesCsv]
      suite: String
      teased: [teasesCsv]
      title: String
    }
    type teasesCsv implements Node {
      by: String
      id: String
      notes: String
      performance: songperformancesCsv @link(from: "performance_id" by: "id")
      song: songsCsv @link(from: "song_id" by: "id")
      song_name: String
      within: String
    }
    type venuesCsv implements Node {
      id: String
      location: String
      name: String
    }
  `)
}

exports.createPages = async ({graphql, actions: {createPage, createTypes} }) => {
  const result = await graphql(`
    query AllPagesQuery {
      allVenuesCsv { nodes { id } }
      allSongsCsv { nodes { id } }
      allShowsCsv { nodes { id } }
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
  if (!venues.find(v => v.id)) {
    global.console.log('venues missing name...........')
    global.console.log(result)
  }
  const lastShowId = Math.max(...shows.map(show => show.id)) // TODO pull this with graphql

  // shows.filter(show => show.date).forEach((show) => {
  //   createPage({
  //     path: `/show/embed/${show.id}`,
  //     component: ShowEmbedTemplate,
  //     context: {
  //       showId: show.id,
  //     },
  //   }); // semicolon needed to separate the two calls to `createPage`
  //   createPage({
  //     path: `/show/${show.id}`,
  //     component: ShowTemplate,
  //     context: {
  //       showId: show.id,
  //       lastShowId,
  //     }
  //   })
  // })

  songs.filter(song => song.title && song.title !== '[unknown]').forEach((song) => {
    createPage({
      path: `/song/${song.id}`,
      component: SongTemplate,
      context: {
        songId: song.id,
      }
    })
  })

  // venues.filter(venue => venue.name).forEach(venue => {
  //   createPage({
  //     path: `/venue/${venue.id}-${slugify(venue.name)}`,
  //     component: VenueTemplate,
  //     context: {
  //       venueId: venue.jsonId,
  //     },
  //   })
  // })
}
