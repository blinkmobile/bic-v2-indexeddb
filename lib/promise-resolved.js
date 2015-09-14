'use strict';

// foreign modules

const $ = global.jQuery;

// this module

const dfrd = new $.Deferred();

dfrd.resolve();

export default dfrd.promise();
