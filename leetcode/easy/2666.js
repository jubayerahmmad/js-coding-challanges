/**
 * LeetCode 2666 – Allow One Function Call
 * Difficulty: Easy
 *
 * Problem:
 * Given a function fn, return a new function that allows fn to be called only once.
 * The first call should return fn’s result, subsequent calls should return undefined.
 *
 * Example:
 * const fn = (a, b, c) => a + b + c;
 * const onceFn = once(fn);
 * onceFn(1, 2, 3); // 6
 * onceFn(4, 5, 6); // undefined
 *
 * Topics: Closure, Higher-order function
 */

var once = function (fn) {
  let calls = 0;

  return function (...args) {
    calls++;
    if (calls > 1) return undefined;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
