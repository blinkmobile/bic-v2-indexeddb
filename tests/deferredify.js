'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import deferredify from '../lib/deferredify';

// this modules

test('deferredify', (t) => {
  t.equal(typeof deferredify, 'function');
  t.end();
});

test('deferredify(Promise.resolve("abc"))', (t) => {
  const promise = Promise.resolve('abc');
  const dfrd = deferredify(promise);
  t.equal(typeof dfrd.always, 'function');
  t.equal(typeof dfrd.fail, 'function');
  t.equal(typeof dfrd.then, 'function');
  dfrd.then((result) => {
    t.equal(result, 'abc');
    t.end();
  });
});

test('deferredify(Promise.reject(new Error("abc")))', (t) => {
  const promise = Promise.reject(new Error('abc'));
  const dfrd = deferredify(promise);
  t.equal(typeof dfrd.always, 'function');
  t.equal(typeof dfrd.fail, 'function');
  t.equal(typeof dfrd.then, 'function');
  dfrd.fail((err) => {
    t.ok(err instanceof Error);
    t.end();
  });
});
