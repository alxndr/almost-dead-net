/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Almost-Dead.net',
    siteUrl: 'https://almost-dead.net'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-sqlite',
      options: {
        fileName: './data.db',
        queries: [
          { idFieldName: 'id', name: 'guests',           statement: 'SELECT * FROM guests', },
          { idFieldName: 'id', name: 'recordings',       statement: 'SELECT * FROM recordings', },
          { idFieldName: 'id', name: 'segues',           statement: 'SELECT * FROM segues', },
          { idFieldName: 'id', name: 'sets',             statement: 'SELECT * FROM sets', },
          { idFieldName: 'id', name: 'shows',            statement: 'SELECT * FROM shows', },
          { idFieldName: 'id', name: 'songperformances', statement: 'SELECT * FROM songperformances', },
          { idFieldName: 'id', name: 'songs',            statement: 'SELECT * FROM songs', },
          { idFieldName: 'id', name: 'teases',           statement: 'SELECT * FROM teases', },
          { idFieldName: 'id', name: 'venues',           statement: 'SELECT * FROM venues', },
        ],
      },
    },
  ],
};
