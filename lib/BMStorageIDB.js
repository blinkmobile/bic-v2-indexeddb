'use strict';

// foreign modules

import { default as BWeakMap } from 'weakmap';
const WeakMap = global.WeakMap || BWeakMap;

const localForage = global.localforage;

// local modules

import BMStorage from './BMStorage';
import deferredify from './deferredify';
import promiseReliable from './promise-reliable';
import promiseResolved from './promise-resolved';

// this module

const privateMap = new WeakMap();

export default class BMStorageIDB extends BMStorage {
  /**
  @param {string?} type - storage mechanism to use, `null` for auto
  @param {string} [partition=default] - WebSQL / IndexedDB database name
  @param {string} [section=main] - WebSQL table / IndexedDB object store name
  */
  constructor (type, partition = 'default', section = 'main') {
    super(type, partition, section);

    privateMap.set(this, {});
  }

  ready () {
    const privates = privateMap.get(this);

    return promiseReliable
    .then((result) => {
      const { type, partition, section } = this;

      if (result) {
        privates.localforage = localForage.createInstance({
          driver: localForage.INDEXEDDB,
          name: `${partition}:${section}`,
          // storeName: section, // https://github.com/mozilla/localForage/issues/449
          version: 1.0
        });
        return promiseResolved;
      }

      privates.blinkStorage = new BMStorageIDB.BlinkStorage(type, partition, section);
      return privates.blinkStorage.ready();
    });
  }

  get (key) {
    const { localforage, blinkStorage } = privateMap.get(this);
    if (localforage) {
      return deferredify(localforage.getItem(key));
    }
    if (blinkStorage) {
      return blinkStorage.get(key);
    }
    return super.get(key);
  }

  set (key, value) {
    const { localforage, blinkStorage } = privateMap.get(this);
    if (localforage) {
      return deferredify(localforage.setItem(key, value));
    }
    if (blinkStorage) {
      return blinkStorage.set(key, value);
    }
    return super.set(key, value);
  }

  remove (key) {
    const { localforage, blinkStorage } = privateMap.get(this);
    if (localforage) {
      return deferredify(localforage.removeItem(key));
    }
    if (blinkStorage) {
      return blinkStorage.remove(key);
    }
    return super.remove(key);
  }

  keys () {
    const { localforage, blinkStorage } = privateMap.get(this);
    if (localforage) {
      return deferredify(localforage.keys());
    }
    if (blinkStorage) {
      return blinkStorage.keys();
    }
    return super.keys();
  }

  count () {
    const { localforage, blinkStorage } = privateMap.get(this);
    if (localforage) {
      return deferredify(localforage.length());
    }
    if (blinkStorage) {
      return blinkStorage.count();
    }
    return super.count();
  }

  removeKeysRegExp (regexp) {
    const { blinkStorage } = privateMap.get(this);
    if (BMStorageIDB.BlinkStorage) {
      return BMStorageIDB.BlinkStorage.prototype.removeKeysRegExp.call(this, regexp);
    }
    if (blinkStorage) {
      return blinkStorage.removeKeysRegExp(regexp);
    }
    return super.removeKeysRegExp(regexp);
  }
}

// preserve the old class, for internal use
if (global.BlinkStorage) {
  BMStorageIDB.BlinkStorage = global.BlinkStorage;
}
