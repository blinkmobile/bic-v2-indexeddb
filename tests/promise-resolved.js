'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import promiseResolved from '../lib/promise-resolved';
import { isPromise, isNotDeferred } from './lib/assertions';

// this modules

test('promiseResolved', (t) => {
  isPromise(t, promiseResolved);
  isNotDeferred(t, promiseResolved);
  t.end();
});

test('promiseResolved resolves', (t) => {
  promiseResolved
  .then((result) => {
    t.pass('resolves');
  })
  .fail((err) => {
    t.error(err);
    t.fail('rejected unexpectedly');
  })
  .always(() => t.end());
});
