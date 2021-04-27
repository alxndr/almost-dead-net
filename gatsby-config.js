module.exports = {
  siteMetadata: {
    title: 'Almost-Dead.net',
    description: 'JRAD setlists & discussion forum',
    siteUrl: 'https://almost-dead.net',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //`gatsby-transformer-sharp`,
    //`gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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