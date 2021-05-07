const slugify = require('slugify')

const ShowTemplate = require.resolve('./src/templates/show.js')
const ShowEmbedTemplate = require.resolve('./src/templates/show-embed.js')
const SongTemplate = require.resolve('./src/templates/song.js')
const VenueTemplate = require.resolve('./src/templates/venue.js')

exports.createSchemaCustomization = ({actions: {createTypes}}) => {
  createTypes(`
    type teasesCsv implements Node {
      performance_id: String
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
    allVenuesCsv: {nodes: venues},
  } = result.data
  const lastShowId = shows.reduce((acc, elem) => Number(acc.id) > Number(elem.id) ? acc : elem, []).id // TODO pull this with graphql
  const songs = result.data.allSongsCsv.nodes

  shows.forEach((show) => {
    const showVenueId = show.venue_id.toString()
    const venue = venues.find(venue => venue.id === showVenueId) // TODO move into graphql
    createPage({
      path: `/show/embed/${show.id}`,
      component: ShowEmbedTemplate,
      context: {
        showId: show.id,
        venueId: venue.id,
      },
    })
    createPage({
      path: `/show/${show.id}`,
      component: ShowTemplate,
      context: {
        showId: show.id,
        venueId: venue.id,
        lastShowId,
      }
    })
  })

  songs.forEach((song) => {
    createPage({
      path: `/song/${song.id}`,
      component: SongTemplate,
      context: {
        songId: song.id,
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
