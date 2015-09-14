'use strict';

// foreign modules

import { default as BWeakMap } from 'weakmap';
const WeakMap = global.WeakMap || BWeakMap;

// local modules

import BMStorage from './BMStorage';
import promiseReliable from './promise-reliable';

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
    const privates = {};
    privateMap.set(this, privates);

    global.console.log('new BMStorageIDB():');
    if (BMStorageIDB.Upstream) {
      privates.upstream = new BMStorageIDB.Upstream(type, partition, section);
    }
  }

  ready () {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#ready():');
      return promiseReliable
      .then((result) => {
        return privates.upstream.ready();
      });
    }
    throw new Error('not implemented');
  }

  get (...args) {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#get():');
      return privates.upstream.get(...args);
    }
    throw new Error('not implemented');
  }

  set (...args) {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#set():');
      return privates.upstream.set(...args);
    }
    throw new Error('not implemented');
  }

  remove (...args) {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#remove():');
      return privates.upstream.remove(...args);
    }
    throw new Error('not implemented');
  }

  keys () {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#keys():');
      return privates.upstream.keys();
    }
    throw new Error('not implemented');
  }

  count () {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#count():');
      return privates.upstream.count();
    }
    throw new Error('not implemented');
  }

  removeKeysRegExp (...args) {
    const privates = privateMap.get(this);
    if (privates.upstream) {
      global.console.log('BMStorageIDB#removeKeysRegExp():');
      return privates.upstream.removeKeysRegExp(...args);
    }
    throw new Error('not implemented');
  }
}
