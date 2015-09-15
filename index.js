'use strict';

// local modules

import BMStorageIDB from './lib/BMStorageIDB';

// this module

if (global.BlinkStorage) {
  const detected = global.BlinkStorage.prototype.available;
  if (~detected.indexOf('localstorage') && !~detected.indexOf('websqldatabase')) {
    global.console.log('BMStorageIDB hijacking BlinkStorage...');

    BMStorageIDB.Upstream = global.BlinkStorage;
    // BMStorageIDB.prototype.available = global.BlinkStorage.prototype.available;
    global.BlinkStorage = BMStorageIDB;
  }
}

module.exports = {
  BMStorageIDB
};
