/**
 * 2619. Array Prototype Last
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 * Example 1:
 * Input: nums = [null, {}, 3
 * Output:
 * Explanation: Calling nums.last() should return the last element: 3.
 */

Array.prototype.last = function () {
  console.log(this);

  return this.length > 0 ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
console.log(arr.last()); // 3
