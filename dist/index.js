!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o);t.console.log("BMStorageIDB: starting..."),t.console.log("global.BlinkStorage: "+!!t.BlinkStorage),t.console.log("global.MyAnswers: "+!!t.MyAnswers),t.BlinkStorage&&(u["default"].Upstream=t.BlinkStorage,t.BlinkStorage=u["default"]),e.exports={BMStorageIDB:u["default"]}}).call(t,function(){return this}())},function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t,n){for(var r=!0;r;){var o=e,u=t,a=n;i=c=l=void 0,r=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=u,n=a,r=!0}},c=n(2),f=o(c),s=n(3),p=o(s),v=r.WeakMap||f["default"],m=new v,g=function(e){function t(e){var n=arguments.length<=1||void 0===arguments[1]?"default":arguments[1],o=arguments.length<=2||void 0===arguments[2]?"main":arguments[2];u(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,o);var a={};m.set(this,a),r.console.log("new BMStorageIDB():"),t.Upstream&&(a.upstream=new t.Upstream(e,n,o))}return a(t,e),i(t,[{key:"ready",value:function(){var e=m.get(this);if(e.upstream)return r.console.log("BMStorageIDB#ready():"),e.upstream.ready();throw new Error("not implemented")}},{key:"get",value:function(){var e=m.get(this);if(e.upstream){var t;return r.console.log("BMStorageIDB#get():"),(t=e.upstream).get.apply(t,arguments)}throw new Error("not implemented")}},{key:"set",value:function(){var e=m.get(this);if(e.upstream){var t;return r.console.log("BMStorageIDB#set():"),(t=e.upstream).set.apply(t,arguments)}throw new Error("not implemented")}},{key:"remove",value:function(){var e=m.get(this);if(e.upstream){var t;return r.console.log("BMStorageIDB#remove():"),(t=e.upstream).remove.apply(t,arguments)}throw new Error("not implemented")}},{key:"keys",value:function(){var e=m.get(this);if(e.upstream)return r.console.log("BMStorageIDB#keys():"),e.upstream.keys();throw new Error("not implemented")}},{key:"count",value:function(){var e=m.get(this);if(e.upstream)return r.console.log("BMStorageIDB#count():"),e.upstream.count();throw new Error("not implemented")}},{key:"removeKeysRegExp",value:function(){var e=m.get(this);if(e.upstream){var t;return r.console.log("BMStorageIDB#removeKeysRegExp():"),(t=e.upstream).removeKeysRegExp.apply(t,arguments)}throw new Error("not implemented")}}]),t}(p["default"]);t["default"]=g,e.exports=t["default"]}).call(t,function(){return this}())},function(e,t,n){"use strict";void function(t,n,r){function o(e,t,n){return"function"==typeof t&&(n=t,t=u(n).replace(/_$/,"")),l(e,t,{configurable:!0,writable:!0,value:n})}function u(e){return"function"!=typeof e?"":"name"in e?e.name:c.call(e).match(p)[1]}function a(e){function t(t,o){return o||2===arguments.length?n.set(t,o):(o=n.get(t),o===r&&(o=e(t),n.set(t,o))),o}var n=new m;return e||(e=g),t}var i=Object.getOwnPropertyNames,l=Object.defineProperty,c=Function.prototype.toString,f=Object.create,s=Object.prototype.hasOwnProperty,p=/^\n?function\s?(\w*)?_?\(/,v=function(){function e(){var e=a(),r={};this.unlock=function(o){var u=p(o);if(s.call(u,e))return u[e](r);var a=f(null,t);return l(u,e,{value:new Function("s","l",n)(r,a)}),a}}var t={value:{writable:!0,value:r}},n="return function(k){if(k===s)return l}",u=f(null),a=function(){for(var e=!0;e;){t=r,e=!1;var t=Math.random().toString(36).slice(2);if(!(t in u))return u[t]=t;e=!0}},c=a(),p=function(e){if(s.call(e,c))return e[c];if(!Object.isExtensible(e))throw new TypeError("Object must be extensible");var t=f(null);return l(e,c,{value:t}),t};return o(Object,function(e){var t=i(e);return s.call(e,c)&&t.splice(t.indexOf(c),1),t}),o(e.prototype,function(e){return this.unlock(e).value}),o(e.prototype,function(e,t){this.unlock(e).value=t}),e}(),m=function(e){function a(e){return this===t||null==this||this===a.prototype?new a(e):(m(this,new v),void y(this,e))}function i(e){p(e);var t=g(this).get(e);return t===n?r:t}function l(e,t){p(e),g(this).set(e,t===r?n:t)}function c(e){return p(e),g(this).get(e)!==r}function f(e){p(e);var t=g(this),n=t.get(e)!==r;return t.set(e,r),n}function s(){return g(this),"[object WeakMap]"}var p=function(e){if(null==e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Invalid WeakMap key")},m=function(t,n){var r=e.unlock(t);if(r.value)throw new TypeError("Object is already a WeakMap");r.value=n},g=function(t){var n=e.unlock(t).value;if(!n)throw new TypeError("WeakMap is not generic");return n},y=function(e,t){null!==t&&"object"==typeof t&&"function"==typeof t.forEach&&t.forEach(function(n,r){n instanceof Array&&2===n.length&&l.call(e,t[r][0],t[r][1])})};try{var h=("return "+f).replace("e_","\\u0065"),d=new Function("unwrap","validate",h)(g,p)}catch(w){var d=f}var h=(""+Object).split("Object"),b=function(){return h[0]+u(this)+h[1]};o(b,b);var k={__proto__:[]}instanceof Array?function(e){e.__proto__=b}:function(e){o(e,b)};return k(a),[s,i,l,c,d].forEach(function(e){o(a.prototype,e),k(e)}),a}(new v),g=Object.create?function(){return Object.create(null)}:function(){return{}};e.exports=m,m.createStorage=a,t.WeakMap&&(t.WeakMap.createStorage=a)}((0,eval)("this"))},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var r=arguments.length<=1||void 0===arguments[1]?"default":arguments[1],o=arguments.length<=2||void 0===arguments[2]?"main":arguments[2];n(this,e),this.type=t,this.partition=r,this.section=o}return r(e,[{key:"ready",value:function(){throw new Error("not implemented")}},{key:"get",value:function(){throw new Error("not implemented")}},{key:"set",value:function(){throw new Error("not implemented")}},{key:"remove",value:function(){throw new Error("not implemented")}},{key:"keys",value:function(){throw new Error("not implemented")}},{key:"count",value:function(){throw new Error("not implemented")}},{key:"removeKeysRegExp",value:function(){throw new Error("not implemented")}}]),e}();t["default"]=o,Object.defineProperties(o.prototype,{constructor:{value:o},available:{value:[]}}),e.exports=t["default"]}])});
//# sourceMappingURL=index.js.map