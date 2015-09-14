'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import promiseResolved from '../lib/promise-resolved';

// this modules

test('promiseResolved', (t) => {
  t.equal(typeof promiseResolved.always, 'function');
  t.equal(typeof promiseResolved.fail, 'function');
  t.equal(typeof promiseResolved.then, 'function');
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
