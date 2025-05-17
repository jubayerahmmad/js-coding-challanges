/**
 * LeetCode 2623 – Memoize
 * Difficulty: Medium
 *
 * Problem:
 * Implement a memoization function. Given a function `fn`, return a memoized version of it.
 * The memoized function should return cached results when called with the same arguments.
 *
 * Example:
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = args.toString();

    // cache.hasOwnProperty(key) --> best choice
    // key in cache --> best choice
    // cache[key] -->  won't work if the fn return 0 as its a falsy value
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    } else {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(1, -1)); // 0
console.log(memoizedFn(1, -1)); // 0
console.log(callCount); // 1 (it will increase if cache[key] used in if blocks as the fn returns 0)
