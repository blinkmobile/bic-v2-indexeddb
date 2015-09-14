'use strict';

// local modules

import BMStorageIDB from './lib/BMStorageIDB';

// this module

global.console.log('BMStorageIDB: starting...');

global.console.log(`global.BlinkStorage: ${!!global.BlinkStorage}`);
global.console.log(`global.MyAnswers: ${!!global.MyAnswers}`);

if (global.BlinkStorage) {
  BMStorageIDB.Upstream = global.BlinkStorage;
  // BMStorageIDB.prototype.available = global.BlinkStorage.prototype.available;
  global.BlinkStorage = BMStorageIDB;
}

module.exports = {
  BMStorageIDB
};
