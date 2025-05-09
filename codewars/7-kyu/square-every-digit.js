/**
 * In this kata, you are asked to square every digit of a number and concatenate them.
   For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
   Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25) 
 * STEPS:
 * - Split the digit and convert into an array of Strings
 * - Take an empty Array to push the square of each digits
 * - Loop through the array and push the square of each digits to that empty array
 * - Return that array and u use .join('') to make that array into a number. e.g, [1,2,3] --> 123

*/

function squareDigits(number) {
  const toArray = number.toString().split("");
  let squaredDigit = [];
  //   let squaredDigit = "";
  for (let i = 0; i < toArray.length; i++) {
    const int = parseInt(toArray[i]);
    const square = int * int;
    // squaredDigit += square; // bad approach
    squaredDigit.push(square);
  }
  // return Number(parseInt(squaredDigit))
  return Number(squaredDigit.join(""));
}
// 🔹 This is better than using += inside the loop because:
//    - Strings in JS are immutable: `+=` creates a new string each time (O(n²) time)
//    - Arrays allow efficient appends, and `join("")` builds the final string in one pass (O(n) time)
console.log(squareDigits(765));
