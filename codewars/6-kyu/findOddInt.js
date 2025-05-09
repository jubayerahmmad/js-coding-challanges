/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 * [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 * [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 *
 * Steps to solve:
 * 1. Create an empty object to store the frequency of each integer in the array.
 * 2. Iterate through the array and count the occurrences of each integer.
 * 3. Store the count of each integer as a key-value pair in the object.
 * 4. Iterate through the object to find the integer with an odd frequency.
 * 5. Return the integer that appears an odd number of times.
 */

function findOdd(A) {
  //   return A.reduce((l, r) => l ^ r); // one liner XOR
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    const key = A[i];
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }
  for (let objKey in obj) {
    if (obj[objKey] % 2 !== 0) {
      return +objKey;
    }
  }
}

console.log(findOdd([0, 1, 0, 1, 0]));
