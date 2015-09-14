'use strict';

// foreign modules

const test = require('tape');

// local modules

require('./tests/lib/bic');

const addon = require('./');

// this modules

test('addon', (t) => {
  t.ok(addon);
  t.end();
});

test('addon.BMStorageIDB', (t) => {
  t.ok(addon.BMStorageIDB);
  t.end();
});
