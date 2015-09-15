'use strict';

// foreign modules

import { default as test } from 'tape';

// local modules

import BMStorageIDB from '../lib/BMStorageIDB';
import promiseReliable from '../lib/promise-reliable';
import { isPromise, isNotDeferred } from './lib/assertions';

// this modules

let hasIndexedDB;

test('promiseReliable.then() gives boolean', (t) => {
  promiseReliable.then((result) => {
    t.equal(typeof result, 'boolean');
    hasIndexedDB = result;
    t.end();
  });
});

test('BMStorageIDB', (t) => {
  t.equal(typeof BMStorageIDB, 'function');
  t.end();
});

let store;
test('new BMStorageIDB()', (t) => {
  store = new BMStorageIDB(null, 'test', 'test');
  t.equal(typeof store, 'object');
  t.end();
});

test('BMStorageIDB#ready()', (t) => {
  if (hasIndexedDB) {
    const dfrd = store.ready();
    isPromise(t, dfrd);
    isNotDeferred(t, dfrd);
    dfrd.then(() => {
      t.end();
    });
  } else {
    t.throws(() => {
      store.ready();
    });
    t.end();
  }
});

test('BMStorageIDB#get(key)', (t) => {
  if (hasIndexedDB) {
    const dfrd = store.get('key');
    isPromise(t, dfrd);
    isNotDeferred(t, dfrd);
    dfrd.then((result) => {
      t.notOk(result, 'no value for "key" yet');
      t.end();
    });
  } else {
    t.throws(() => {
      store.get('key');
    });
    t.end();
  }
});

test('BMStorageIDB#set(key, value)', (t) => {
  if (hasIndexedDB) {
    const dfrd = store.set('key', 'value');
    isPromise(t, dfrd);
    isNotDeferred(t, dfrd);
    dfrd.then(() => {
      return store.get('key');
    })
    .then((result) => {
      t.equal(result, 'value');
      t.end();
    });
  } else {
    t.throws(() => {
      store.set('key', 'value');
    });
    t.end();
  }
});

test('BMStorageIDB#remove(key)', (t) => {
  if (hasIndexedDB) {
    const dfrd = store.remove('key');
    isPromise(t, dfrd);
    isNotDeferred(t, dfrd);
    dfrd.then(() => {
      t.end();
    });
  } else {
    t.throws(() => {
      store.remove('key');
    });
    t.end();
  }
});

test('BMStorageIDB#keys()', (t) => {
  if (hasIndexedDB) {
    const dfrd = store.keys();
    isPromise(t, dfrd);
    isNotDeferred(t, dfrd);
    dfrd.then((result) => {
      t.ok(Array.isArray(result));
      t.equal(result.length, 0);

      return store.set('keyA', 'value1');
    })
    .then(() => {
      return store.set('keyB', 'value2');
    })
    .then(() => {
      return store.keys();
    })
    .then((result) => {
      t.ok(Array.isArray(result));
      t.equal(result.length, 2);
      t.ok(~result.indexOf('keyA'));
      t.ok(~result.indexOf('keyB'));
      t.end();
    });
  } else {
    t.throws(() => {
      store.keys();
    });
    t.end();
  }
});

test('BMStorageIDB#count()', (t) => {
  if (hasIndexedDB) {
    const dfrd = store.count();
    isPromise(t, dfrd);
    isNotDeferred(t, dfrd);
    dfrd.then((result) => {
      t.equal(result, 2);

      return store.remove('keyA');
    })
    .then(() => {
      return store.remove('keyB');
    })
    .then(() => {
      return store.count();
    })
    .then((result) => {
      t.equal(result, 0);
      t.end();
    });
  } else {
    t.throws(() => {
      store.count();
    });
    t.end();
  }
});

test('BMStorageIDB#removeKeysRegExp(/key/)', (t) => {
  t.throws(() => {
    store.removeKeysRegExp(/key/);
  });
  t.end();
});
