'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import BMStorage from '../lib/BMStorage';

// this modules

test('BMStorage', (t) => {
  t.equal(typeof BMStorage, 'function');
  t.end();
});

let store;
test('new BMStorage()', (t) => {
  store = new BMStorage(null, 'test', 'test');
  t.equal(typeof store, 'object');
  t.end();
});

test('BMStorage#ready()', (t) => {
  t.throws(() => {
    store.ready();
  });
  t.end();
});

test('BMStorage#get(key)', (t) => {
  t.throws(() => {
    store.get('key');
  });
  t.end();
});

test('BMStorage#set(key, value)', (t) => {
  t.throws(() => {
    store.set('key', 'value');
  });
  t.end();
});

test('BMStorage#remove(key)', (t) => {
  t.throws(() => {
    store.remove('key');
  });
  t.end();
});

test('BMStorage#keys()', (t) => {
  t.throws(() => {
    store.keys();
  });
  t.end();
});

test('BMStorage#count()', (t) => {
  t.throws(() => {
    store.counts();
  });
  t.end();
});

test('BMStorage#removeKeysRegExp(/key/)', (t) => {
  t.throws(() => {
    store.removeKeysRegExp(/key/);
  });
  t.end();
});
