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
      name: String
    }
    type recordingsCsv implements Node {
      show: showsCsv @link
    }
    type setsCsv implements Node {
      setlist: String
    }
    type showsCsv implements Node {
      date: Date
      encore1: Int
      encore2: Int
      event: String
      links: String
      notes: String
      num_recordings: Int
      set1: Int
      set2: Int
      set3: Int
      soundcheck: Int
      tagline: String
      venue_id: String
    }
    type songperformancesCsv implements Node {
      next_perfid: songperformancesCsv @link
      prev_perfid: songperformancesCsv @link
      prev_show_id: showsCsv @link
      set_id: setsCsv @link
      show_id: showsCsv @link
      song_id: songsCsv @link
      variation: String
    }
    type songsCsv implements Node {
      author: String
      core_jrad: Boolean
      core_gd: Boolean
      cover_gd: Boolean
      performances: String
      performed: [songperformancesCsv]
      suite: String
      teased: [teasesCsv]
      title: String!
    }
    type teasesCsv implements Node {
      performance_id: songperformancesCsv @link
      song_id: songsCsv @link
      within: String
    }
    type venuesCsv implements Node {
      capacity: Int
      generic_name: String
      location: String
      name: String
      tagname: String
    }
  `)
}

exports.createPages = async ({graphql, actions: {createPage, createTypes} }) => {
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
    }
  `)
  const {
    allShowsCsv: {nodes: shows},
    allSongsCsv: {nodes: songs},
    allVenuesCsv: {nodes: venues},
  } = result.data
  const lastShowId = shows.reduce((acc, elem) => Number(acc.id) > Number(elem.id) ? acc : elem, []).id // TODO pull this with graphql

  shows.filter(show => show.date).forEach((show) => {
    createPage({
      path: `/show/embed/${show.id}`,
      component: ShowEmbedTemplate,
      context: {
        showId: show.id,
        venueId: show.venue_id,
      },
    })
    createPage({
      path: `/show/${show.id}`,
      component: ShowTemplate,
      context: {
        showId: show.id,
        venueId: show.venue_id,
        lastShowId,
      }
    })
  })

  songs.filter(song => song.title && song.title !== '[unknown]').forEach((song) => {
    createPage({
      path: `/song/${song.id}`,
      component: SongTemplate,
      context: {
        songId: song.id,
      }
    })
  })

  venues.filter(venue => venue.name).forEach(venue => {
    createPage({
      path: `/venue/${venue.id}-${slugify(venue.name)}`,
      component: VenueTemplate,
      context: {
        venueId: venue.id,
      },
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
