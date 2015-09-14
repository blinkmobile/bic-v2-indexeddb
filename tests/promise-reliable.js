'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import promiseReliable from '../lib/promise-reliable';
import { isPromise, isNotDeferred } from './lib/assertions';

// this modules

test('promiseReliable', (t) => {
  isPromise(t, promiseReliable);
  isNotDeferred(t, promiseReliable);
  t.end();
});

test('promiseReliable.then() gives boolean', (t) => {
  promiseReliable.then((result) => {
    t.equal(typeof result, 'boolean');
    t.end();
  });
});
