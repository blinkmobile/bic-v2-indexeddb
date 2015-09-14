'use strict';

export function isObject (t, value) {
  t.ok(value);
  t.equal(typeof value, 'object');
}

export function isPromise (t, value) {
  isObject(t, value);
  t.equal(typeof value.always, 'function');
  t.equal(typeof value.fail, 'function');
  t.equal(typeof value.then, 'function');
}

export function isNotPromise (t, value) {
  t.ok(!value || typeof value !== 'object' || !(value.always || value.fail || value.then));
}

export function isDeferred (t, value) {
  isPromise(t, value);
  t.equal(typeof value.reject, 'function');
  t.equal(typeof value.resolve, 'function');
}

export function isNotDeferred (t, value) {
  t.ok(!value || typeof value !== 'object' || !(value.reject || value.resolve));
}
