/**
 * 2622. Cache With Time Limit
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key. The class has three public methods:
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 * count(): returns the count of un-expired keys.
 */

// using prototype
// var TimeLimitedCache = function () {
//   this.cache = new Map();
// };

// TimeLimitedCache.prototype.set = function (key, value, duration) {
//   const alreadyExits = this.cache.get(key);
//   if (alreadyExits) {
//     clearTimeout(alreadyExits.timeoutId);
//   }

//   const timeoutId = setTimeout(() => {
//     this.cache.delete(key);
//   }, duration);
//   this.cache.set(key, { value, timeoutId });
//   return Boolean(alreadyExits);
// };

// TimeLimitedCache.prototype.get = function (key) {
//   if (this.cache.has(key)) {
//     return this.cache.get(key).value;
//   } else {
//     return -1;
//   }
// };

// TimeLimitedCache.prototype.count = function () {
//   return this.cache.size;
// };

// using class
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }
  set(key, value, duration) {
    const alreadyExits = this.cache.get(key);
    // If the key exists, clear the previous timeout so we can reset it
    if (alreadyExits) {
      clearTimeout(alreadyExits.timeoutId);
    }
    // Set a new timeout to automatically delete the key after the duration
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    // Store the value and its timeout reference
    this.cache.set(key, { value, timeoutId });

    // Return true if key previously existed, false otherwise
    return Boolean(alreadyExits);
  }
  get(key) {
    if (this.cache.has(key)) return this.cache.get(key).value;

    return -1;
  }
  count() {
    return this.cache.size;
  }
}

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
