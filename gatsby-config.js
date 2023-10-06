module.exports = {
  siteMetadata: {
    title: 'Almost-Dead.net',
    description: 'Setlist info (segues, teases) about Joe Russo\'s Almost Dead live performances, with links to available recordings and a discussion forum.',
    siteUrl: 'https://almost-dead.net',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/csv/`,
      },
    },
    `gatsby-transformer-csv`,
    'gatsby-plugin-loadable-components-ssr',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Shadows Into Light',
          'Quicksand',
        ],
        display: 'swap',
      },
    },
  ],
}
