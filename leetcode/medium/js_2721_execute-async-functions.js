/**
 * 2721. Execute Asynchronous Functions in Parallel
 *
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
 *
 * promise resolves:
 * When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
 *
 * promise rejects:
 * When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
 * Please solve it without using the built-in Promise.all function.
 */

var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let resolvedPromise = Array(functions.length);
    let pending = functions.length;

    if (pending === 0) return resolve([]); // if the array of funtions is empty

    functions.forEach((fn, i) => {
      fn()
        .then((result) => {
          resolvedPromise[i] = result;
          pending--;
          if (pending === 0) resolve(resolvedPromise);
        })
        .catch((err) => reject(err));
    });
  });
};
