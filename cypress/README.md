# [Cypress] test suite

## Local

First, set `$CYPRESS_BASE_URL` to the base URL to test:

    $ export CYPRESS_BASE_URL=http://localhost:8000

Start a dev server and run the entire test suite:

    $ npm run test:e2e

A single test file can be run by setting `SPEC` (to the filename, without the `.cy.js` suffix) and using `cy:run:single`:

    $ SPEC=home-page nr cy:run:single

Options such as `--headed --no-exit` can be passed to the above commands, but the options list must be prefixed by *another* `--`, for example:

    $ SPEC=home-page nr cy:run:single -- --headed --no-exit


## Continuous Integration

The test suite should be configured to run on every commit pushed to GitHub, [via GitHub Actions](https://github.com/alxndr/almost-dead-net/actions).

It is broken into two parts: `smoke` and `validation`.

* The `smoke` job runs the default test suite.`
* The `validation` job runs only the `zz-validate-data` spec configured to check all concert pages.

Both jobs can be flaky, failing with an error such as:

    AssertionError: Timed out retrying after 15000ms: Expected to find content: '1/26' within the element: <section.homepage__showsbyyear> but never did.


[Cypress]: https://cypress.io
