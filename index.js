'use strict';

// local modules

import BMStorageIDB from './lib/BMStorageIDB';

// this module

if (global.BlinkStorage) {
  const detected = global.BlinkStorage.prototype.available;
  if (~detected.indexOf('localstorage') && !~detected.indexOf('websqldatabase')) {
    global.console.log('BMStorageIDB hijacking BlinkStorage...');
    global.BlinkStorage = BMStorageIDB;
  }
}

module.exports = {
  BMStorageIDB
};
