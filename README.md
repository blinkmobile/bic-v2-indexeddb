# bic-v2-indexeddb

add-on for BIC v2 that enabled storage via IndexedDB

[![Build Status](https://travis-ci.org/blinkmobile/bic-v2-indexeddb.png)](https://travis-ci.org/blinkmobile/bic-v2-indexeddb)


## Getting Started

The [dist/](dist) directory has convenient copies of the project build output:

- bmstorageidb.js - this project all by itself, bring your own localforage

- bmstorageidb.localforage.js - this project combined with a copy of localforage

To install,
you should start by referring to the combined bundle in the "externalJavaScript" setting for your solution.
This will involve hosting a copy somewhere.

We recommend using the tagged releases.
Raw changes in the master branch may be unstable.


## What does it do?

1. define a new global constructor `window.BMStorageIDB`

1. start searching for a reliable IndexedDB implementation (give up after 3 seconds)

    - pass: console logs "IndexedDB tests passed"

    - fail: console logs "IndexedDB tests failed: avoiding IndexedDB"

1. if WebSQL is unavailable and `localStorage` is available,
  replace the current `window.BlinkStorage` constructor with this new one,
  otherwise stop now and do nothing further

    - we preserve the original constructor at `window.BMStorageIDB.BlinkStorage`

    - the console will log "BMStorageIDB hijacking BlinkStorage..."

1. if we hijacked `BlinkStorage` and IndexedDB _passed_ our tests,
  then we use [localForage](http://mozilla.github.io/localForage/),
  with its IndexedDB driver,
  for all intercepted storage requests

1. if we hijacked `BlinkStorage` and IndexedDB _failed_ our tests,
  then we use the original `BlinkStorage` for all intercepted storage requests


## Caveats

We highly recommend that you use this in production strictly after thorough testing,
under realistic conditions (with realistic amounts of data to store).

### No Automatic Migrations

Deploying this add-on will divert all storage requests away from `localStorage`.
If end-users have valuable data stored using `localStorage`,
they will no longer be able to access it.

As such, we highly recommend that you inform end-users of this before deployment.
That way, they may back-up / transfer / submit valuable data.


## Development

- `npm test` to run all tests in PhantomJS, run ESLint, and build with WebPack

- `npm run karma:chrome` to run tests in Chrome

- `npm run karma:phantomjs` to run tests in PhantomJS
