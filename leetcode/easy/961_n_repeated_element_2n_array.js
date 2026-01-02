/**
 * 961. N-Repeated Element in Size 2N Array
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */

var repeatedNTimes = function (nums) {
  const n = nums.length / 2;

  const map = new Map();
  let ans = 0;

  for (const element of nums) {
    if (map.has(element)) {
      ans = element;
      break;
    } else {
      map.set(element, 1);
    }
  }

  console.log(ans);
  return ans;
};

const nums = [5, 1, 5, 2, 5, 3, 5, 4];

repeatedNTimes(nums);
