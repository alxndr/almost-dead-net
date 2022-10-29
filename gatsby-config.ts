import type { GatsbyConfig } from "gatsby";

interface KnexThing {
  select: (columnName: string, ...additionalColumnNames: [string]) => KnexThing
  from: (tableName: string) => KnexThing
  innerJoin: (tableName: string, columnNameA: string, columnNameB: string) => KnexThing
  where: (lhs: string, operator: string, rhs: string) => KnexThing
  limit: () => KnexThing
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Almost-Dead.net',
    siteUrl: `https://almost-dead.net`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
      },
    },
    {
      resolve: 'gatsby-source-sql',
      options: {
        typeName: 'Songs',
        fieldname: 'data',
        dbEngine: {
          client: 'better-sqlite3',
          debug: true,
          connection: {
            filename: './src/data.db',
          },
        },
        queryChain: (db: KnexThing) =>
          db.select('id', 'title')
            .from('songs')
      },
    },
    // 'gatsby-plugin-loadable-components-ssr',
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       'Shadows Into Light',
    //       'Quicksand',
    //     ],
    //     display: 'swap',
    //   },
    // },
    // {
    //   resolve: '@sentry/gatsby',
    //   options: {
    //     dsn: 'https://174349d7133f4877ba279f589bf54642@o412799.ingest.sentry.io/5293476',
    //   },
    // },
  ],
};

export default config;
