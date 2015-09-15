(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// local modules

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libBMStorageIDB = __webpack_require__(1);

	var _libBMStorageIDB2 = _interopRequireDefault(_libBMStorageIDB);

	// this module

	global.console.log('BMStorageIDB: starting...');

	global.console.log('global.BlinkStorage: ' + !!global.BlinkStorage);
	global.console.log('global.MyAnswers: ' + !!global.MyAnswers);

	if (global.BlinkStorage) {
	  _libBMStorageIDB2['default'].Upstream = global.BlinkStorage;
	  // BMStorageIDB.prototype.available = global.BlinkStorage.prototype.available;
	  global.BlinkStorage = _libBMStorageIDB2['default'];
	}

	module.exports = {
	  BMStorageIDB: _libBMStorageIDB2['default']
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// foreign modules

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _weakmap = __webpack_require__(2);

	var _weakmap2 = _interopRequireDefault(_weakmap);

	// local modules

	var _BMStorage2 = __webpack_require__(3);

	var _BMStorage3 = _interopRequireDefault(_BMStorage2);

	var _deferredify = __webpack_require__(4);

	var _deferredify2 = _interopRequireDefault(_deferredify);

	var _promiseReliable = __webpack_require__(5);

	var _promiseReliable2 = _interopRequireDefault(_promiseReliable);

	var _promiseResolved = __webpack_require__(11);

	var _promiseResolved2 = _interopRequireDefault(_promiseResolved);

	// this module

	var WeakMap = global.WeakMap || _weakmap2['default'];

	var localForage = global.localforage;var privateMap = new WeakMap();

	var BMStorageIDB = (function (_BMStorage) {
	  _inherits(BMStorageIDB, _BMStorage);

	  /**
	  @param {string?} type - storage mechanism to use, `null` for auto
	  @param {string} [partition=default] - WebSQL / IndexedDB database name
	  @param {string} [section=main] - WebSQL table / IndexedDB object store name
	  */

	  function BMStorageIDB(type) {
	    var partition = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    var section = arguments.length <= 2 || arguments[2] === undefined ? 'main' : arguments[2];

	    _classCallCheck(this, BMStorageIDB);

	    _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'constructor', this).call(this, type, partition, section);

	    var privates = { type: type, partition: partition, section: section };
	    privateMap.set(this, privates);
	  }

	  _createClass(BMStorageIDB, [{
	    key: 'ready',
	    value: function ready() {
	      var privates = privateMap.get(this);

	      return _promiseReliable2['default'].then(function (result) {
	        var type = privates.type;
	        var partition = privates.partition;
	        var section = privates.section;

	        if (result) {
	          privates.localforage = localForage.createInstance({
	            driver: localForage.INDEXEDDB,
	            name: partition + ':' + section,
	            // storeName: section, // https://github.com/mozilla/localForage/issues/449
	            version: 1.0
	          });
	          return _promiseResolved2['default'];
	        }

	        privates.upstream = new BMStorageIDB.Upstream(type, partition, section);
	        return privates.upstream.ready();
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(key) {
	      var _privateMap$get = privateMap.get(this);

	      var localforage = _privateMap$get.localforage;
	      var upstream = _privateMap$get.upstream;

	      if (localforage) {
	        return (0, _deferredify2['default'])(localforage.getItem(key));
	      }
	      if (upstream) {
	        return upstream.get(key);
	      }
	      return _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'get', this).call(this, key);
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      var _privateMap$get2 = privateMap.get(this);

	      var localforage = _privateMap$get2.localforage;
	      var upstream = _privateMap$get2.upstream;

	      if (localforage) {
	        return (0, _deferredify2['default'])(localforage.setItem(key, value));
	      }
	      if (upstream) {
	        return upstream.set(key, value);
	      }
	      return _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'set', this).call(this, key, value);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(key) {
	      var _privateMap$get3 = privateMap.get(this);

	      var localforage = _privateMap$get3.localforage;
	      var upstream = _privateMap$get3.upstream;

	      if (localforage) {
	        return (0, _deferredify2['default'])(localforage.removeItem(key));
	      }
	      if (upstream) {
	        return upstream.remove(key);
	      }
	      return _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'remove', this).call(this, key);
	    }
	  }, {
	    key: 'keys',
	    value: function keys() {
	      var _privateMap$get4 = privateMap.get(this);

	      var localforage = _privateMap$get4.localforage;
	      var upstream = _privateMap$get4.upstream;

	      if (localforage) {
	        return (0, _deferredify2['default'])(localforage.keys());
	      }
	      if (upstream) {
	        return upstream.keys();
	      }
	      return _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'keys', this).call(this);
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      var _privateMap$get5 = privateMap.get(this);

	      var localforage = _privateMap$get5.localforage;
	      var upstream = _privateMap$get5.upstream;

	      if (localforage) {
	        return (0, _deferredify2['default'])(localforage.length());
	      }
	      if (upstream) {
	        return upstream.count();
	      }
	      return _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'count', this).call(this);
	    }
	  }, {
	    key: 'removeKeysRegExp',
	    value: function removeKeysRegExp(regexp) {
	      var _privateMap$get6 = privateMap.get(this);

	      var upstream = _privateMap$get6.upstream;

	      if (BMStorageIDB.Upstream) {
	        return BMStorageIDB.Upstream.prototype.removeKeysRegExp.call(this, regexp);
	      }
	      if (upstream) {
	        return upstream.removeKeysRegExp(regexp);
	      }
	      return _get(Object.getPrototypeOf(BMStorageIDB.prototype), 'removeKeysRegExp', this).call(this, regexp);
	    }
	  }]);

	  return BMStorageIDB;
	})(_BMStorage3['default']);

	exports['default'] = BMStorageIDB;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* (The MIT License)
	 *
	 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
	 * associated documentation files (the 'Software'), to deal in the Software without restriction,
	 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
	 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included with all copies or
	 * substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
	 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
	 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */

	// Original WeakMap implementation by Gozala @ https://gist.github.com/1269991
	// Updated and bugfixed by Raynos @ https://gist.github.com/1638059
	'use strict';

	void (function (global, undefined_, undefined) {
	  var getProps = Object.getOwnPropertyNames,
	      defProp = Object.defineProperty,
	      toSource = Function.prototype.toString,
	      create = Object.create,
	      hasOwn = Object.prototype.hasOwnProperty,
	      funcName = /^\n?function\s?(\w*)?_?\(/;

	  function define(object, key, value) {
	    if (typeof key === 'function') {
	      value = key;
	      key = nameOf(value).replace(/_$/, '');
	    }
	    return defProp(object, key, { configurable: true, writable: true, value: value });
	  }

	  function nameOf(func) {
	    return typeof func !== 'function' ? '' : 'name' in func ? func.name : toSource.call(func).match(funcName)[1];
	  }

	  // ############
	  // ### Data ###
	  // ############

	  var Data = (function () {
	    var dataDesc = { value: { writable: true, value: undefined } },
	        datalock = 'return function(k){if(k===s)return l}',
	        uids = create(null),
	        createUID = function createUID() {
	      var _again = true;

	      _function: while (_again) {
	        key = undefined;
	        _again = false;

	        var key = Math.random().toString(36).slice(2);
	        if (key in uids) {
	          _again = true;
	          continue _function;
	        } else {
	          return uids[key] = key;
	        }
	      }
	    },
	        globalID = createUID(),
	        storage = function storage(obj) {
	      if (hasOwn.call(obj, globalID)) return obj[globalID];

	      if (!Object.isExtensible(obj)) throw new TypeError("Object must be extensible");

	      var store = create(null);
	      defProp(obj, globalID, { value: store });
	      return store;
	    };

	    // common per-object storage area made visible by patching getOwnPropertyNames'
	    define(Object, function getOwnPropertyNames(obj) {
	      var props = getProps(obj);
	      if (hasOwn.call(obj, globalID)) props.splice(props.indexOf(globalID), 1);
	      return props;
	    });

	    function Data() {
	      var puid = createUID(),
	          secret = {};

	      this.unlock = function (obj) {
	        var store = storage(obj);
	        if (hasOwn.call(store, puid)) return store[puid](secret);

	        var data = create(null, dataDesc);
	        defProp(store, puid, {
	          value: new Function('s', 'l', datalock)(secret, data)
	        });
	        return data;
	      };
	    }

	    define(Data.prototype, function get(o) {
	      return this.unlock(o).value;
	    });
	    define(Data.prototype, function set(o, v) {
	      this.unlock(o).value = v;
	    });

	    return Data;
	  })();

	  var WM = (function (data) {
	    var validate = function validate(key) {
	      if (key == null || typeof key !== 'object' && typeof key !== 'function') throw new TypeError("Invalid WeakMap key");
	    };

	    var wrap = function wrap(collection, value) {
	      var store = data.unlock(collection);
	      if (store.value) throw new TypeError("Object is already a WeakMap");
	      store.value = value;
	    };

	    var unwrap = function unwrap(collection) {
	      var storage = data.unlock(collection).value;
	      if (!storage) throw new TypeError("WeakMap is not generic");
	      return storage;
	    };

	    var initialize = function initialize(weakmap, iterable) {
	      if (iterable !== null && typeof iterable === 'object' && typeof iterable.forEach === 'function') {
	        iterable.forEach(function (item, i) {
	          if (item instanceof Array && item.length === 2) set.call(weakmap, iterable[i][0], iterable[i][1]);
	        });
	      }
	    };

	    function WeakMap(iterable) {
	      if (this === global || this == null || this === WeakMap.prototype) return new WeakMap(iterable);

	      wrap(this, new Data());
	      initialize(this, iterable);
	    }

	    function get(key) {
	      validate(key);
	      var value = unwrap(this).get(key);
	      return value === undefined_ ? undefined : value;
	    }

	    function set(key, value) {
	      validate(key);
	      // store a token for explicit undefined so that "has" works correctly
	      unwrap(this).set(key, value === undefined ? undefined_ : value);
	    }

	    function has(key) {
	      validate(key);
	      return unwrap(this).get(key) !== undefined;
	    }

	    function delete_(key) {
	      validate(key);
	      var data = unwrap(this),
	          had = data.get(key) !== undefined;
	      data.set(key, undefined);
	      return had;
	    }

	    function toString() {
	      unwrap(this);
	      return '[object WeakMap]';
	    }

	    try {
	      var src = ('return ' + delete_).replace('e_', '\\u0065'),
	          del = new Function('unwrap', 'validate', src)(unwrap, validate);
	    } catch (e) {
	      var del = delete_;
	    }

	    var src = ('' + Object).split('Object');
	    var stringifier = function toString() {
	      return src[0] + nameOf(this) + src[1];
	    };

	    define(stringifier, stringifier);

	    var prep = { __proto__: [] } instanceof Array ? function (f) {
	      f.__proto__ = stringifier;
	    } : function (f) {
	      define(f, stringifier);
	    };

	    prep(WeakMap);

	    [toString, get, set, has, del].forEach(function (method) {
	      define(WeakMap.prototype, method);
	      prep(method);
	    });

	    return WeakMap;
	  })(new Data());

	  var defaultCreator = Object.create ? function () {
	    return Object.create(null);
	  } : function () {
	    return {};
	  };

	  function createStorage(creator) {
	    var weakmap = new WM();
	    creator || (creator = defaultCreator);

	    function storage(object, value) {
	      if (value || arguments.length === 2) {
	        weakmap.set(object, value);
	      } else {
	        value = weakmap.get(object);
	        if (value === undefined) {
	          value = creator(object);
	          weakmap.set(object, value);
	        }
	      }
	      return value;
	    }

	    return storage;
	  }

	  if (true) {
	    module.exports = WM;
	  } else if (typeof exports !== 'undefined') {
	    exports.WeakMap = WM;
	  } else if (!('WeakMap' in global)) {
	    global.WeakMap = WM;
	  }

	  WM.createStorage = createStorage;
	  if (global.WeakMap) global.WeakMap.createStorage = createStorage;
	})((0, eval)('this'));
	// Expanded by Benvie @ https://github.com/Benvie/harmony-collections

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var BMStorage = (function () {
	  /**
	  @param {string?} type - storage mechanism to use, `null` for auto
	  @param {string} [partition=default] - WebSQL / IndexedDB database name
	  @param {string} [section=main] - WebSQL table / IndexedDB object store name
	  */

	  function BMStorage(type) {
	    var partition = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    var section = arguments.length <= 2 || arguments[2] === undefined ? 'main' : arguments[2];

	    _classCallCheck(this, BMStorage);

	    this.type = type;
	    this.partition = partition;
	    this.section = section;
	  }

	  _createClass(BMStorage, [{
	    key: 'ready',
	    value: function ready() {
	      throw new Error('BMStorage#ready() not implemented');
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      throw new Error('BMStorage#get() not implemented');
	    }
	  }, {
	    key: 'set',
	    value: function set() {
	      throw new Error('BMStorage#set() not implemented');
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      throw new Error('BMStorage#remove() not implemented');
	    }
	  }, {
	    key: 'keys',
	    value: function keys() {
	      throw new Error('BMStorage#keys() not implemented');
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      throw new Error('BMStorage#count() not implemented');
	    }
	  }, {
	    key: 'removeKeysRegExp',
	    value: function removeKeysRegExp() {
	      throw new Error('BMStorage#removeKeysRegExp() not implemented');
	    }
	  }]);

	  return BMStorage;
	})();

	exports['default'] = BMStorage;

	Object.defineProperties(BMStorage.prototype, {
	  available: {
	    value: []
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// foreign modules

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = deferredify;
	var $ = global.jQuery;

	// this module

	/**
	@param {Promise} promise - a real native Promise
	@returns {$.Deferred} jQuery implementation of a Promise
	*/

	function deferredify(promise) {
	  var dfrd = new $.Deferred();
	  promise.then(dfrd.resolve, dfrd.reject);
	  return dfrd.promise();
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// foreign modules

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jokeyrhymeDeadline = __webpack_require__(6);

	var _jokeyrhymeDeadline2 = _interopRequireDefault(_jokeyrhymeDeadline);

	var _blinkmobileIsIndexeddbReliable = __webpack_require__(7);

	var _blinkmobileIsIndexeddbReliable2 = _interopRequireDefault(_blinkmobileIsIndexeddbReliable);

	var $ = global.jQuery;

	// this module

	var dfrd = new $.Deferred();

	_jokeyrhymeDeadline2['default'].callback(function (done) {
	  _blinkmobileIsIndexeddbReliable2['default'].quick(function (result) {
	    done(null, result);
	  });
	}, 3000, function (err, result) {
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

	exports['default'] = dfrd.promise();
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  /**
	  @param {Function} fn to execute
	  @param {Number} timeout milliseconds to wait
	  @returns {Function} wrapped `fn`, called automatically per-timeout
	  */
	  fn: function fn(_fn, timeout) {
	    var timer;
	    var newFn = function newFn() {
	      if (timer) {
	        clearTimeout(timer);
	        timer = null;
	      }
	      return _fn.apply(this, arguments);
	    };
	    timer = setTimeout(newFn, timeout);
	    return newFn;
	  },

	  /**
	  @param {Promise} promise to wait for
	  @param {Number} timeout milliseconds to wait
	  @returns {Promise} new Promise rejects when deadline exceeded
	  */
	  promise: function promise(_promise, timeout) {
	    return new Promise(function (resolve, reject) {
	      var isExceeded = false;

	      var timer = setTimeout(function () {
	        isExceeded = true;
	        reject(new Error(timeout + 'ms deadline exceeded'));
	      }, timeout);

	      _promise.then(function () {
	        // resolved
	        if (!isExceeded) {
	          clearTimeout(timer);
	          resolve.apply(_promise, arguments);
	        }
	      }, function () {
	        // rejected
	        if (!isExceeded) {
	          clearTimeout(timer);
	          reject.apply(_promise, arguments);
	        }
	      });
	    });
	  },

	  /**
	  @callback ErrorFirstCallback
	  @param {?Error} error or `null` (if no error)
	  @param {...} optional, zero or more return data (if no error)
	  */

	  /**
	  @callback FunctionTakingErrorFirstCallback
	  @param {ErrorFirstCallback} called when done
	  */

	  /**
	  @param {Function} fn to execute
	  @param {Number} timeout milliseconds to wait
	  @param {ErrorFirstCallback} callback called with timeout Error or results from fn
	  */
	  callback: function callback(fn, timeout, _callback) {
	    var isExceeded = false;

	    var timer = setTimeout(function () {
	      isExceeded = true;
	      _callback(new Error(timeout + 'ms deadline exceeded'));
	    }, timeout);

	    fn(function (err, data) {
	      if (!isExceeded) {
	        clearTimeout(timer);
	        _callback(err, data);
	      }
	    });
	  }

	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// our modules

	var close = __webpack_require__(8);
	var runCallback = __webpack_require__(9);
	var runBrokenBadTest = __webpack_require__(10);

	// this module

	var UTIL_NAME = 'isIndexedDBReliable';
	var DB_NAME = UTIL_NAME + '-test';

	var api;

	/**
	 * @returns {Boolean} basic feature-detect result
	 */
	function sync() {
	  var NAME = DB_NAME + '-sync';
	  var req;
	  api = global.indexedDB || global.mozIndexedDB || global.webkitIndexedDB || global.msIndexedDB;
	  if (!api) {
	    return false;
	  }
	  if ('deleteDatabase' in api) {
	    try {
	      req = api.open(NAME, 1);
	      if ('onsuccess' in req && 'onupgradeneeded' in req) {
	        req.onerror = function () {
	          close(api, req.result, NAME);
	        };
	        req.onsuccess = function () {
	          close(api, req.result, NAME);
	        };
	        return true;
	      }
	    } catch (err) {
	      console.error(err);
	      return !err;
	    }
	  }
	  return false;
	}

	/**
	 * @callback resultCallback
	 * @param {Boolean} result of the feature-detect
	 */

	/**
	 * @param {resultCallback} callback
	 */
	function quick(callback) {
	  if (!sync()) {
	    runCallback(callback, false);
	    return;
	  }

	  runBrokenBadTest(api, function (err) {
	    if (err) {
	      runCallback(callback, false);
	      return;
	    }
	    runCallback(callback, true);
	  });
	}

	/**
	 * @param {resultCallback} callback
	 */
	function thorough(callback) {
	  runCallback(callback, false);
	}

	module.exports = {
	  sync: sync,
	  quick: quick,
	  thorough: thorough
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*eslint-disable no-empty*/ // explicitly want noop catches

	'use strict';

	module.exports = function close(api, db, name) {
	  try {
	    db.close();
	  } catch (ignore) {}

	  try {
	    api.deleteDatabase(name);
	  } catch (ignore) {}
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	module.exports = function runCallback(callback, arg) {
	  try {
	    callback(arg);
	  } catch (err) {
	    if (global.console && global.console.error) {
	      global.console.error('error thrown during callback');
	      global.console.error(err);
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// our modules

	var close = __webpack_require__(8);

	// this module

	function runWrites(db, callback) {
	  var tx, store;

	  try {
	    tx = db.transaction(['people', 'notes'], 'readwrite');
	  } catch (err) {
	    callback(err);
	    return;
	  }

	  tx.onerror = function (err) {
	    callback(err);
	  };

	  tx.oncomplete = function () {
	    callback(null, null);
	  };

	  try {
	    store = tx.objectStore('people');
	    store.add({ name: 'Harry', created: new Date().toString() });

	    store = tx.objectStore('notes');
	    store.add({ note: 'blah', created: new Date().toString() });
	  } catch (err) {
	    callback(err);
	  }
	}

	function findEntry(db, store, prop, value, callback) {
	  var tx, req;

	  try {
	    tx = db.transaction([store], 'readonly');
	    req = tx.objectStore(store).openCursor();
	  } catch (err) {
	    callback(err);
	    return;
	  }

	  req.onerror = function (err) {
	    callback(err);
	  };

	  req.onsuccess = function () {
	    var cursor = req.result;
	    if (cursor) {
	      if (cursor.value && cursor.value.created && cursor.value[prop] === value) {
	        callback(null, cursor.value);
	        return;
	      }
	      cursor['continue']();
	      return;
	    }
	    callback(new Error('test entry not found'), null);
	  };
	}

	function runReads(db, callback) {
	  findEntry(db, 'people', 'name', 'Harry', function (err) {
	    if (err) {
	      callback(err);
	      return;
	    }
	    findEntry(db, 'notes', 'note', 'blah', callback);
	  });
	}

	// http://www.raymondcamden.com/2014/09/25/IndexedDB-on-iOS-8-Broken-Bad
	module.exports = function runBrokenBadTest(api, callback) {
	  var BB_NAME = 'idbTest-brokenBad-safari';
	  var req;

	  try {
	    req = api.open(BB_NAME, 1);
	  } catch (err) {
	    callback(err);
	    return;
	  }

	  req.onerror = function (err) {
	    close(req.result, BB_NAME);
	    callback(err);
	  };

	  req.onupgradeneeded = function () {
	    var db;
	    db = req.result;
	    if (!db.objectStoreNames.contains('people')) {
	      db.createObjectStore('people', { autoIncrement: true });
	    }
	    if (!db.objectStoreNames.contains('notes')) {
	      db.createObjectStore('notes', { autoIncrement: true });
	    }
	  };

	  req.onsuccess = function () {
	    runWrites(req.result, function (wErr) {
	      if (wErr) {
	        close(req.result, BB_NAME);
	        callback(wErr);
	        return;
	      }
	      runReads(req.result, function (rErr) {
	        close(req.result, BB_NAME);
	        callback(rErr);
	      });
	    });
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// foreign modules

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var $ = global.jQuery;

	// this module

	var dfrd = new $.Deferred();

	dfrd.resolve();

	exports['default'] = dfrd.promise();
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;