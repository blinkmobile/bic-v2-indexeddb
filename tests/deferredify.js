'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import deferredify from '../lib/deferredify';
import { isPromise, isNotDeferred } from './lib/assertions';

// this modules

test('deferredify', (t) => {
  t.equal(typeof deferredify, 'function');
  t.end();
});

test('deferredify(Promise.resolve("abc"))', (t) => {
  const promise = Promise.resolve('abc');
  const dfrd = deferredify(promise);
  isPromise(t, dfrd);
  isNotDeferred(t, dfrd);
  dfrd.then((result) => {
    t.equal(result, 'abc');
    t.end();
  });
});

test('deferredify(Promise.reject(new Error("abc")))', (t) => {
  const promise = Promise.reject(new Error('abc'));
  const dfrd = deferredify(promise);
  isPromise(t, dfrd);
  isNotDeferred(t, dfrd);
  dfrd.fail((err) => {
    t.ok(err instanceof Error);
    t.end();
  });
});
