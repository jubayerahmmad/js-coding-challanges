// 2626. Array Reduce Transformation
/**
 * Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
 * This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
 * If the length of the array is 0, the function should return init.
 * Example 1:
   Input: 
   nums = [1,2,3,4]
   fn = function sum(accum, curr) { return accum + curr; }
   init = 0
   Output: 10
   Explanation:
   initially, the value is init=0.
   (0) + nums[0] = 1
   (1) + nums[1] = 3
   (3) + nums[2] = 6
   (6) + nums[3] = 10
   The final answer is 10.
 */

const reduce = function (nums, fn, init) {
  let result = init;
  if (!nums.length) return result;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

const nums = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
function sum2(accum, curr) {
  return accum + curr * curr;
}
const init = 100;

console.log(reduce(nums, sum2, init));
