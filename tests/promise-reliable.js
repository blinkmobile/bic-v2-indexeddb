'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import promiseReliable from '../lib/promise-reliable';

// this modules

test('promiseReliable', (t) => {
  t.equal(typeof promiseReliable.always, 'function');
  t.equal(typeof promiseReliable.fail, 'function');
  t.equal(typeof promiseReliable.then, 'function');
  t.end();
});

test('promiseReliable.then() gives boolean', (t) => {
  promiseReliable.then((result) => {
    t.equal(typeof result, 'boolean');
    t.end();
  });
});
