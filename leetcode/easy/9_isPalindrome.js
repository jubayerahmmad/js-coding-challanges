/**
 * 9. Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

var isPalindrome = function (x) {
  const nums = x.toString().split("");
  let res = "";
  for (let i = nums.length - 1; i >= 0; i--) {
    res += nums[i];
  }
  return +res === x ? true : false;
};

// var isPalindrome = function (x) {
//   let stringX = String(x);
//   for (let i = 0; i < stringX.length / 2; i++) {
//     if (stringX[i] !== stringX[stringX.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

const x = 121;

console.log(isPalindrome(x));
