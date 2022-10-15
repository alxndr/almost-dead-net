import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Almost-Dead.net',
    siteUrl: `https://almost-dead.net`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};

export default config;
