# [Almost-Dead.net] 

This is the source code for the fan site [Almost-Dead.net].
It is not officially associated with the band [Joe Russo's Almost Dead].

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The website uses the [Gatsby] framework.
The forum sub-site [`lot.almost-dead.net`](https://lot.almost-dead.net) is powered by [Discourse].


## Documentation

Documentation is in Markdown files throughout the repository.

The task `npm run docs` will start a local webserver with a nice UX for browsing and searching, powered by [hads].

If you're reading this in the docs viewer, below is an index of all the files:

[[index]]


## Development

Run the app in the development mode:

    $ npm run dev

Open `http://localhost:8000` to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


## Deploy

Build the app for production, and deploy to GitHub Pages:

    $ npm run deploy:prod


## Tests

Tests are written using the integration framework [Cypress].

First, set `$CYPRESS_BASE_URL` to the base URL to test:

    $ export CYPRESS_BASE_URL=http://localhost:8000

Start a dev server and run the entire test suite:

    $ npm run test:e2e



[Almost-Dead.net]: https://almost-dead.net
[Cypress]: https://cypress.io
[Discourse]: https://discourse.org
[Joe Russo's Almost Dead]: http://www.joerussosalmostdead.com
[Gatsby]: https://www.gatsbyjs.com
[hads]: https://github.com/sinedied/hads
