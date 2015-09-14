'use strict';

// foreign modules

const $ = global.jQuery;

// this module

/**
@param {Promise} promise - a real native Promise
@returns {$.Deferred} jQuery implementation of a Promise
*/
export default function deferredify (promise) {
  const dfrd = new $.Deferred();
  promise.then(dfrd.resolve, dfrd.reject);
  return dfrd.promise();
}
