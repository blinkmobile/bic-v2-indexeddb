'use strict';

export default class BMStorage {
  /**
  @param {string?} type - storage mechanism to use, `null` for auto
  @param {string} [partition=default] - WebSQL / IndexedDB database name
  @param {string} [section=main] - WebSQL table / IndexedDB object store name
  */
  constructor (type, partition = 'default', section = 'main') {
    this.type = type;
    this.partition = partition;
    this.section = section;
  }

  ready () { throw new Error('not implemented'); }

  get () { throw new Error('not implemented'); }

  set () { throw new Error('not implemented'); }

  remove () { throw new Error('not implemented'); }

  keys () { throw new Error('not implemented'); }

  count () { throw new Error('not implemented'); }

  removeKeysRegExp () { throw new Error('not implemented'); }
}

Object.defineProperties(BMStorage.prototype, {
  constructor: {
    value: BMStorage
  },

  available: {
    value: []
  }
});
