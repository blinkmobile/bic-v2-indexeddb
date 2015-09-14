'use strict';

// foreign modules

import deadline from '@jokeyrhyme/deadline';
import isIndexedDBReliable from '@blinkmobile/is-indexeddb-reliable';
const $ = global.jQuery;

// this module

const dfrd = new $.Deferred();

deadline.callback((done) => {
  isIndexedDBReliable.quick((result) => {
    done(null, result);
  });
}, 3000, (err, result) => {
  if (err || !result) {
    if (global.console && global.console.warn) {
      global.console.warn('IndexedDB tests failed: avoiding IndexedDB');
    }
  } else {
    if (global.console && global.console.log) {
      global.console.log('IndexedDB tests passed');
    }
  }
  dfrd.resolve(!!result);
});

export default dfrd.promise();
