const {readFileSync} = require('fs');
const {join} = require('path')
const csvsync = require('csvsync')
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  retries: 2,
  video: false,
  e2e: {
    async setupNodeEvents(on, config) {
      const [headers, ...shows] = csvsync.parse(readFileSync(join(__dirname, 'src/data/csv/shows.csv'), 'utf8'))
      global.console.log({headers, shows})
      config.env.shows = shows
      config.resolved.env.shows = shows
      // global.console.log(config)
      /*
  headers: [
    'id',             'date',
    'venue_id',       'set1',
    'set2',           'set3',
    'encore1',        'encore2',
    'soundcheck',     'notes',
    'event',          'links',
    'num recordings', 'tagline',
    'sellout'
  ],
  shows: [
    [
      '1',
      '1/26/2013',
      '22',
      '1',
      '2',
      '',
      '3',
      '',
      '',
      'first show',
      'Freaks Ball',
      '',
      '6',
      '1/26/13 @ Brooklyn Bowl (Brooklyn)',
      ''
    ],
    [
      '2',
      '12/27/2013',
      '76',
      '4',
      '5',
      '',
      '6',
      '',
      '',
      '',
      '',
      'https://i.imgur.com/CSFAO6J.jpg',
      '2',
      '12/27/13 @ Capitol Theatre (Port Chester)',
      ''
    ],*/
      // We've imported your old cypress plugins here.
      // You may want to clean this up later by importing these.
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:8000/",
  },
});
