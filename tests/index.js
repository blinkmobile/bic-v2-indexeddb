'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

require('./lib/bic');

require('./deferredify');
require('./promise-reliable');
require('./promise-resolved');
require('./BMStorage');
require('./BMStorageIDB');

import { default as addon } from '../';

// this modules

test('addon', (t) => {
  t.ok(addon);
  t.end();
});

test('addon.BMStorageIDB', (t) => {
  t.ok(addon.BMStorageIDB);
  t.end();
});
