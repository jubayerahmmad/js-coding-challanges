/**
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
 * (1, 1) --> 1 (1 since both are same)
   (-1, 0) --> -1 (-1 + 0 = -1)
   (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */

function getSum(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  }

  let highestNum = a > b ? a : b;
  let lowestNum = a < b ? a : b;

  for (let i = lowestNum; i <= highestNum; i++) {
    sum += i;
  }
  return sum;
  // return ((Math.abs(a - b) + 1) * (a + b)) / 2; // one liner solution
  /**
   * Math.abs(a - b) + 1: This gives the number of terms between a and b, inclusive.
   * Example: a = -1, b = 2 → | -1 - 2 | + 1 = 3 + 1 = 4 terms → -1, 0, 1, 2
   * (a + b) : This is the sum of the first and last number, which gives the average of the range when divided by 2.
   * Constant time complexity (O(1)) — very efficient!
   */
}

console.log(getSum(65, 25));
