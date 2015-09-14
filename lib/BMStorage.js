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

  ready () { throw new Error('BMStorage#ready() not implemented'); }

  get () { throw new Error('BMStorage#get() not implemented'); }

  set () { throw new Error('BMStorage#set() not implemented'); }

  remove () { throw new Error('BMStorage#remove() not implemented'); }

  keys () { throw new Error('BMStorage#keys() not implemented'); }

  count () { throw new Error('BMStorage#count() not implemented'); }

  removeKeysRegExp () { throw new Error('BMStorage#removeKeysRegExp() not implemented'); }
}

Object.defineProperties(BMStorage.prototype, {
  available: {
    value: []
  }
});
