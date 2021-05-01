module.exports = {
  siteMetadata: {
    title: 'Almost-Dead.net',
    description: 'JRAD setlists & discussion forum',
    siteUrl: 'https://almost-dead.net',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //{
    //  resolve: `gatsby-plugin-manifest`,
    //  options: {
    //    name: 'almost-dead-net',
    //    short_name: 'almost-dead-net',
    //    start_url: `/`,
    //    //background_color: `#663399`,
    //    //theme_color: `#663399`,
    //    display: `minimal-ui`,
    //    icon: './src/images/ned.png', // This path is relative to the root of the site.
    //  },
    //},
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
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://174349d7133f4877ba279f589bf54642@o412799.ingest.sentry.io/5293476',
      },
    },
  ],
}
