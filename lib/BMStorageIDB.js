'use strict';

// foreign modules

import { default as BWeakMap } from 'weakmap';
const WeakMap = global.WeakMap || BWeakMap;

const localForage = global.localforage;

// local modules

import BMStorage from './BMStorage';
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

    const privates = { type, partition, section };
    privateMap.set(this, privates);
  }

  ready () {
    const privates = privateMap.get(this);

    return promiseReliable
    .then((result) => {
      const { type, partition, section } = privates;

      if (result) {
        privates.localforage = localForage.createInstance({
          driver: localForage.INDEXEDDB,
          name: `${partition}:${section}`,
          // storeName: section, // https://github.com/mozilla/localForage/issues/449
          version: 1.0
        });
        return promiseResolved;
      }

      privates.upstream = new BMStorageIDB.Upstream(type, partition, section);
      return privates.upstream.ready();
    });
  }

  get (key) {
    const { localforage, upstream } = privateMap.get(this);
    if (localforage) {
      return localforage.getItem(key);
    }
    if (upstream) {
      return upstream.get(key);
    }
    return super.get(key);
  }

  set (key, value) {
    const { localforage, upstream } = privateMap.get(this);
    if (localforage) {
      return localforage.setItem(key, value);
    }
    if (upstream) {
      return upstream.set(key, value);
    }
    return super.set(key, value);
  }

  remove (key) {
    const { localforage, upstream } = privateMap.get(this);
    if (localforage) {
      return localforage.removeItem(key);
    }
    if (upstream) {
      return upstream.remove(key);
    }
    return super.remove(key);
  }

  keys () {
    const { localforage, upstream } = privateMap.get(this);
    if (localforage) {
      return localforage.keys();
    }
    if (upstream) {
      return upstream.keys();
    }
    return super.keys();
  }

  count () {
    const { localforage, upstream } = privateMap.get(this);
    if (localforage) {
      return localforage.length();
    }
    if (upstream) {
      return upstream.count();
    }
    return super.count();
  }

  removeKeysRegExp (regexp) {
    const { upstream } = privateMap.get(this);
    if (upstream) {
      return upstream.removeKeysRegExp(regexp);
    }
    return super.removeKeysRegExp(regexp);
  }
}
