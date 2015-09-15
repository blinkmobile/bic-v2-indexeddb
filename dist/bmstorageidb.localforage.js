/*!
    localForage -- Offline Storage, Improved
    Version 1.2.10
    https://mozilla.github.io/localForage
    (c) 2013-2015 Mozilla, Apache License 2.0
*/
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:void(c[a]=b)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a;a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var b="Promise"in a&&"resolve"in a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;return new a.Promise(function(a){b=a}),f(b)}();b||(a.Promise=e)}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){if(!v(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof i))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],k(b,c,d,f);a._subscribers=null}function n(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(u(b)&&(d=b.then,v(d)))return d.call(b,function(d){return c?!0:(c=!0,void(b!==d?o(a,d):p(a,d)))},function(b){return c?!0:(c=!0,void q(a,b))}),!0}catch(e){return c?!0:(q(a,e),!0)}return!1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)})}else l(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}(),function(){"use strict";function a(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(c){if("TypeError"!==c.name)throw c;for(var d=w.BlobBuilder||w.MSBlobBuilder||w.MozBlobBuilder||w.WebKitBlobBuilder,e=new d,f=0;f<a.length;f+=1)e.append(a[f]);return e.getBlob(b.type)}}function b(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,f=i;a instanceof ArrayBuffer?(d=a,f+=k):(d=a.buffer,"[object Int8Array]"===c?f+=m:"[object Uint8Array]"===c?f+=n:"[object Uint8ClampedArray]"===c?f+=o:"[object Int16Array]"===c?f+=p:"[object Uint16Array]"===c?f+=r:"[object Int32Array]"===c?f+=q:"[object Uint32Array]"===c?f+=s:"[object Float32Array]"===c?f+=t:"[object Float64Array]"===c?f+=u:b(new Error("Failed to get type for BinaryArray"))),b(f+e(d))}else if("[object Blob]"===c){var h=new FileReader;h.onload=function(){var c=g+a.type+"~"+e(this.result);b(i+l+c)},h.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(j){console.error("Couldn't convert value into a JSON string: ",a),b(null,j)}}function c(b){if(b.substring(0,j)!==i)return JSON.parse(b);var c,e=b.substring(v),f=b.substring(j,v);if(f===l&&h.test(e)){var g=e.match(h);c=g[1],e=e.substring(g[0].length)}var w=d(e);switch(f){case k:return w;case l:return a([w],{type:c});case m:return new Int8Array(w);case n:return new Uint8Array(w);case o:return new Uint8ClampedArray(w);case p:return new Int16Array(w);case r:return new Uint16Array(w);case q:return new Int32Array(w);case s:return new Uint32Array(w);case t:return new Float32Array(w);case u:return new Float64Array(w);default:throw new Error("Unkown type: "+f)}}function d(a){var b,c,d,e,g,h=.75*a.length,i=a.length,j=0;"="===a[a.length-1]&&(h--,"="===a[a.length-2]&&h--);var k=new ArrayBuffer(h),l=new Uint8Array(k);for(b=0;i>b;b+=4)c=f.indexOf(a[b]),d=f.indexOf(a[b+1]),e=f.indexOf(a[b+2]),g=f.indexOf(a[b+3]),l[j++]=c<<2|d>>4,l[j++]=(15&d)<<4|e>>2,l[j++]=(3&e)<<6|63&g;return k}function e(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=f[c[b]>>2],d+=f[(3&c[b])<<4|c[b+1]>>4],d+=f[(15&c[b+1])<<2|c[b+2]>>6],d+=f[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g="~~local_forage_type~",h=/^~~local_forage_type~([^~]+)~/,i="__lfsc__:",j=i.length,k="arbf",l="blob",m="si08",n="ui08",o="uic8",p="si16",q="si32",r="ur16",s="ui32",t="fl32",u="fl64",v=j+k.length,w=this,x={serialize:b,deserialize:c,stringToBuffer:d,bufferToString:e};"undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?module.exports=x:"function"==typeof define&&define.amd?define("localforageSerializer",function(){return x}):this.localforageSerializer=x}.call(window),function(){"use strict";function a(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(c){if("TypeError"!==c.name)throw c;for(var d=window.BlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder||window.WebKitBlobBuilder,e=new d,f=0;f<a.length;f+=1)e.append(a[f]);return e.getBlob(b.type)}}function b(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;b>e;e++)d[e]=a.charCodeAt(e);return c}function c(a){return new s(function(b,c){var d=new XMLHttpRequest;d.open("GET",a),d.withCredentials=!0,d.responseType="arraybuffer",d.onreadystatechange=function(){return 4===d.readyState?200===d.status?b({response:d.response,type:d.getResponseHeader("Content-Type")}):void c({status:d.status,response:d.response}):void 0},d.send()})}function d(b){return new s(function(d,e){var f=a([""],{type:"image/png"}),g=b.transaction([v],"readwrite");g.objectStore(v).put(f,"key"),g.oncomplete=function(){var a=b.transaction([v],"readwrite"),f=a.objectStore(v).get("key");f.onerror=e,f.onsuccess=function(a){var b=a.target.result,e=URL.createObjectURL(b);c(e).then(function(a){d(!(!a||"image/png"!==a.type))},function(){d(!1)}).then(function(){URL.revokeObjectURL(e)})}}})["catch"](function(){return!1})}function e(a){return"boolean"==typeof u?s.resolve(u):d(a).then(function(a){return u=a})}function f(a){return new s(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function g(c){var d=b(atob(c.data));return a([d],{type:c.type})}function h(a){return a&&a.__local_forage_encoded_blob}function i(a){var b=this,c={db:null};if(a)for(var d in a)c[d]=a[d];return new s(function(a,d){var e=t.open(c.name,c.version);e.onerror=function(){d(e.error)},e.onupgradeneeded=function(a){e.result.createObjectStore(c.storeName),a.oldVersion<=1&&e.result.createObjectStore(v)},e.onsuccess=function(){c.db=e.result,b._dbInfo=c,a()}})}function j(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new s(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),i=f.get(a);i.onsuccess=function(){var a=i.result;void 0===a&&(a=null),h(a)&&(a=g(a)),b(a)},i.onerror=function(){d(i.error)}})["catch"](d)});return r(d,b),d}function k(a,b){var c=this,d=new s(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),i=f.openCursor(),j=1;i.onsuccess=function(){var c=i.result;if(c){var d=c.value;h(d)&&(d=g(d));var e=a(d,c.key,j++);void 0!==e?b(e):c["continue"]()}else b()},i.onerror=function(){d(i.error)}})["catch"](d)});return r(d,b),d}function l(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var g=new s(function(c,g){var h;d.ready().then(function(){return h=d._dbInfo,e(h.db)}).then(function(a){return!a&&b instanceof Blob?f(b):b}).then(function(b){var d=h.db.transaction(h.storeName,"readwrite"),e=d.objectStore(h.storeName);null===b&&(b=void 0);var f=e.put(b,a);d.oncomplete=function(){void 0===b&&(b=null),c(b)},d.onabort=d.onerror=function(){var a=f.error?f.error:f.transaction.error;g(a)}})["catch"](g)});return r(g,c),g}function m(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new s(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readwrite"),g=f.objectStore(e.storeName),h=g["delete"](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}})["catch"](d)});return r(d,b),d}function n(a){var b=this,c=new s(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readwrite"),f=e.objectStore(d.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}})["catch"](c)});return r(c,a),c}function o(a){var b=this,c=new s(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.count();f.onsuccess=function(){a(f.result)},f.onerror=function(){c(f.error)}})["catch"](c)});return r(c,a),c}function p(a,b){var c=this,d=new s(function(b,d){return 0>a?void b(null):void c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=!1,h=f.openCursor();h.onsuccess=function(){var c=h.result;return c?void(0===a?b(c.key):g?b(c.key):(g=!0,c.advance(a))):void b(null)},h.onerror=function(){d(h.error)}})["catch"](d)});return r(d,b),d}function q(a){var b=this,c=new s(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.openCursor(),g=[];f.onsuccess=function(){var b=f.result;return b?(g.push(b.key),void b["continue"]()):void a(g)},f.onerror=function(){c(f.error)}})["catch"](c)});return r(c,a),c}function r(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var s="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?require("promise"):this.Promise,t=t||this.indexedDB||this.webkitIndexedDB||this.mozIndexedDB||this.OIndexedDB||this.msIndexedDB;if(t){var u,v="local-forage-detect-blob-support",w={_driver:"asyncStorage",_initStorage:i,iterate:k,getItem:j,setItem:l,removeItem:m,clear:n,length:o,key:p,keys:q};"undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?module.exports=w:"function"==typeof define&&define.amd?define("asyncStorage",function(){return w}):this.asyncStorage=w}}.call(window),function(){"use strict";function a(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];c.keyPrefix=c.name+"/",b._dbInfo=c;var e=new k(function(a){q===p.DEFINE?require(["localforageSerializer"],a):a(q===p.EXPORT?require("./../utils/serializer"):l.localforageSerializer)});return e.then(function(a){return m=a,k.resolve()})}function b(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=n.length-1;c>=0;c--){var d=n.key(c);0===d.indexOf(a)&&n.removeItem(d)}});return j(c,a),c}function c(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo,d=n.getItem(b.keyPrefix+a);return d&&(d=m.deserialize(d)),d});return j(d,b),d}function d(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo.keyPrefix,d=b.length,e=n.length,f=1,g=0;e>g;g++){var h=n.key(g);if(0===h.indexOf(b)){var i=n.getItem(h);if(i&&(i=m.deserialize(i)),i=a(i,h.substring(d),f++),void 0!==i)return i}}});return j(d,b),d}function e(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=n.key(a)}catch(e){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return j(d,b),d}function f(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=n.length,d=[],e=0;c>e;e++)0===n.key(e).indexOf(a.keyPrefix)&&d.push(n.key(e).substring(a.keyPrefix.length));return d});return j(c,a),c}function g(a){var b=this,c=b.keys().then(function(a){return a.length});return j(c,a),c}function h(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo;n.removeItem(b.keyPrefix+a)});return j(d,b),d}function i(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new k(function(e,f){m.serialize(b,function(b,g){if(g)f(g);else try{var h=d._dbInfo;n.setItem(h.keyPrefix+a,b),e(c)}catch(i){("QuotaExceededError"===i.name||"NS_ERROR_DOM_QUOTA_REACHED"===i.name)&&f(i),f(i)}})})});return j(e,c),e}function j(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var k="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?require("promise"):this.Promise,l=this,m=null,n=null;try{if(!(this.localStorage&&"setItem"in this.localStorage))return;n=this.localStorage}catch(o){return}var p={DEFINE:1,EXPORT:2,WINDOW:3},q=p.WINDOW;"undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?q=p.EXPORT:"function"==typeof define&&define.amd&&(q=p.DEFINE);var r={_driver:"localStorageWrapper",_initStorage:a,iterate:d,getItem:c,setItem:i,removeItem:h,clear:b,length:g,key:e,keys:f};q===p.EXPORT?module.exports=r:q===p.DEFINE?define("localStorageWrapper",function(){return r}):this.localStorageWrapper=r}.call(window),function(){"use strict";function a(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new k(function(a){p===o.DEFINE?require(["localforageSerializer"],a):a(p===o.EXPORT?require("./../utils/serializer"):l.localforageSerializer)}),f=new k(function(d,e){try{c.db=n(c.name,String(c.version),c.description,c.size)}catch(f){return b.setDriver(b.LOCALSTORAGE).then(function(){return b._initStorage(a)}).then(d)["catch"](e)}c.db.transaction(function(a){a.executeSql("CREATE TABLE IF NOT EXISTS "+c.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){b._dbInfo=c,d()},function(a,b){e(b)})})});return e.then(function(a){return m=a,f})}function b(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new k(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=m.deserialize(d)),b(d)},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function c(a,b){var c=this,d=new k(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName,[],function(c,d){for(var e=d.rows,f=e.length,g=0;f>g;g++){var h=e.item(g),i=h.value;if(i&&(i=m.deserialize(i)),i=a(i,h.key,g+1),void 0!==i)return void b(i)}b()},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function d(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new k(function(c,e){d.ready().then(function(){void 0===b&&(b=null);var f=b;m.serialize(b,function(b,g){if(g)e(g);else{var h=d._dbInfo;h.db.transaction(function(d){d.executeSql("INSERT OR REPLACE INTO "+h.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){c(f)},function(a,b){e(b)})},function(a){a.code===a.QUOTA_ERR&&e(a)})}})})["catch"](e)});return j(e,c),e}function e(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new k(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function f(a){var b=this,c=new k(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function g(a){var b=this,c=new k(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function h(a,b){var c=this,d=new k(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function i(a){var b=this,c=new k(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function j(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var k="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?require("promise"):this.Promise,l=this,m=null,n=this.openDatabase;if(n){var o={DEFINE:1,EXPORT:2,WINDOW:3},p=o.WINDOW;"undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?p=o.EXPORT:"function"==typeof define&&define.amd&&(p=o.DEFINE);var q={_driver:"webSQLStorage",_initStorage:a,iterate:c,getItem:b,setItem:d,removeItem:e,clear:f,length:g,key:h,keys:i};p===o.DEFINE?define("webSQLStorage",function(){return q}):p===o.EXPORT?module.exports=q:this.webSQLStorage=q}}.call(window),function(){"use strict";function a(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function b(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&(n(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}function c(a){for(var b in g)if(g.hasOwnProperty(b)&&g[b]===a)return!0;return!1}function d(c){this._config=b({},k,c),this._driverSet=null,this._ready=!1,this._dbInfo=null;for(var d=0;d<i.length;d++)a(this,i[d]);this.setDriver(this._config.driver)}var e="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?require("promise"):this.Promise,f={},g={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},h=[g.INDEXEDDB,g.WEBSQL,g.LOCALSTORAGE],i=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],j={DEFINE:1,EXPORT:2,WINDOW:3},k={description:"",driver:h.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},l=j.WINDOW;"undefined"!=typeof module&&module.exports&&"undefined"!=typeof require?l=j.EXPORT:"function"==typeof define&&define.amd&&(l=j.DEFINE);var m=function(a){var b=b||a.indexedDB||a.webkitIndexedDB||a.mozIndexedDB||a.OIndexedDB||a.msIndexedDB,c={};return c[g.WEBSQL]=!!a.openDatabase,c[g.INDEXEDDB]=!!function(){if("undefined"!=typeof a.openDatabase&&a.navigator&&a.navigator.userAgent&&/Safari/.test(a.navigator.userAgent)&&!/Chrome/.test(a.navigator.userAgent))return!1;try{return b&&"function"==typeof b.open&&"undefined"!=typeof a.IDBKeyRange}catch(c){return!1}}(),c[g.LOCALSTORAGE]=!!function(){try{return a.localStorage&&"setItem"in a.localStorage&&a.localStorage.setItem}catch(b){return!1}}(),c}(this),n=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},o=this;d.prototype.INDEXEDDB=g.INDEXEDDB,d.prototype.LOCALSTORAGE=g.LOCALSTORAGE,d.prototype.WEBSQL=g.WEBSQL,d.prototype.config=function(a){if("object"==typeof a){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a)"storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),this._config[b]=a[b];return"driver"in a&&a.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof a?this._config[a]:this._config},d.prototype.defineDriver=function(a,b,d){var g=new e(function(b,d){try{var g=a._driver,h=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),j=new Error("Custom driver name already in use: "+a._driver);if(!a._driver)return void d(h);if(c(a._driver))return void d(j);for(var k=i.concat("_initStorage"),l=0;l<k.length;l++){var n=k[l];if(!n||!a[n]||"function"!=typeof a[n])return void d(h)}var o=e.resolve(!0);"_support"in a&&(o=a._support&&"function"==typeof a._support?a._support():e.resolve(!!a._support)),o.then(function(c){m[g]=c,f[g]=a,b()},d)}catch(p){d(p)}});return g.then(b,d),g},d.prototype.driver=function(){return this._driver||null},d.prototype.ready=function(a){var b=this,c=new e(function(a,c){b._driverSet.then(function(){null===b._ready&&(b._ready=b._initStorage(b._config)),b._ready.then(a,c)})["catch"](c)});return c.then(a,a),c},d.prototype.setDriver=function(a,b,d){function g(){h._config.driver=h.driver()}var h=this;return"string"==typeof a&&(a=[a]),this._driverSet=new e(function(b,d){var g=h._getFirstSupportedDriver(a),i=new Error("No available storage method found.");if(!g)return h._driverSet=e.reject(i),void d(i);if(h._dbInfo=null,h._ready=null,c(g)){var k=new e(function(a){if(l===j.DEFINE)require([g],a);else if(l===j.EXPORT)switch(g){case h.INDEXEDDB:a(require("./drivers/indexeddb"));break;case h.LOCALSTORAGE:a(require("./drivers/localstorage"));break;case h.WEBSQL:a(require("./drivers/websql"))}else a(o[g])});k.then(function(a){h._extend(a),b()})}else f[g]?(h._extend(f[g]),b()):(h._driverSet=e.reject(i),d(i))}),this._driverSet.then(g,g),this._driverSet.then(b,d),this._driverSet},d.prototype.supports=function(a){return!!m[a]},d.prototype._extend=function(a){b(this,a)},d.prototype._getFirstSupportedDriver=function(a){if(a&&n(a))for(var b=0;b<a.length;b++){var c=a[b];if(this.supports(c))return c}return null},d.prototype.createInstance=function(a){return new d(a)};var p=new d;l===j.DEFINE?define("localforage",function(){return p}):l===j.EXPORT?module.exports=p:this.localforage=p}.call(window);(function webpackUniversalModuleDefinition(root, factory) {
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

	if (global.BlinkStorage) {
	  var detected = global.BlinkStorage.prototype.available;
	  if (~detected.indexOf('localstorage') && ! ~detected.indexOf('websqldatabase')) {
	    global.console.log('BMStorageIDB hijacking BlinkStorage...');

	    _libBMStorageIDB2['default'].Upstream = global.BlinkStorage;
	    // BMStorageIDB.prototype.available = global.BlinkStorage.prototype.available;
	    global.BlinkStorage = _libBMStorageIDB2['default'];
	  }
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