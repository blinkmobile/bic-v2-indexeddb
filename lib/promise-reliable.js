'use strict';

// foreign modules

import isIndexedDBReliable from '@blinkmobile/is-indexeddb-reliable';
const $ = global.jQuery;

// this module

const dfrd = new $.Deferred();

isIndexedDBReliable.quick((result) => {
  dfrd.resolve(result);
});

export default dfrd.promise();
