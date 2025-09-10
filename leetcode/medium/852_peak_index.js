/**
 * 852. Peak Index in a Mountain Array
 *
 * You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
 * Return the index of the peak element.
 * Your task is to solve it in O(log(n)) time complexity.
 *
 * Example 1:
 * Input: arr = [0,1,0]
 * Output: 1
 *
 * Example 2:
 * Input: arr = [0,2,1,0]
 * Output: 1
 *
 * Example 3:
 * Input: arr = [0,10,5,2]
 * Output: 1
 */

var peakIndexInMountainArray = function (arr) {
  let max = 0;
  let max_i = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      max_i = i;
    }
  }
  console.log(max_i);

  return max_i;
};

const arr = [0, 10, 15, 5, 4];

peakIndexInMountainArray(arr);
