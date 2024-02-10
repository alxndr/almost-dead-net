# Validation spec

This test has a hardcoded list of all (see note) concerts' dates and part of the venue name.
By default, the test will visit a random subset of all concert pages, and validate that the appropriate date and venue name appears on the page.

**Note:** this list needs to be updated manually.
It should probably not be automatically derived from the CSV data, for example.


## Options

If the `CYPRESS_VALIDATE_ALL` environment variable is set, the test will verify every (hardcoded) concert entry.


## Mystery

Show #75 times out in CI for an unknown reason.
Seems to load fine locally and [in prod](https://almost-dead.net/show/75)...
