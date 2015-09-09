'use strict';

// foreign modules

var test = require('tape');

// local modules

var BMStorage = require('..');

// this modules

global.console.log('hello, tests!');

test('BMStorage', function (t) {
  t.ok(BMStorage);
  t.end();
});
