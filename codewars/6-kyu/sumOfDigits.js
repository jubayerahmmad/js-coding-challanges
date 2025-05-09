// Finding sum of digits of a number until sum becomes single digit(digital root)
/* Steps to solve the problem:
 1. Convert the number to a string to easily access each digit.
 2. Check if the number is already a single digit (less than 10). If yes, return the number.
 3. Initialize a variable to store the sum of the digits.
 4. Iterate through each character of the string representation of the number.
 5. Convert each character back to a number and add it to the sum.
 6. Recursively call the function with the sum until the result is a single digit.
 7. Return the final single-digit result.
*/

// recursive approach
function digitalRoot(n) {
  const stringN = n.toString();
  let sum = 0;
  if (n < 10) return n;

  for (i = 0; i < stringN.length; i++) {
    sum += Number(stringN[i]);
  }

  return digitalRoot(sum);
}

// The remainder when any number is divided by 9 is equivalent to the sum of its digits reduced to a single digit (digital root)

//  mathematical formula

// function digitalRoot(n) {
//   if (n == 0) return 0;
//   if (n % 9 === 0) return 9;
//   return n % 9;
// }

console.log(digitalRoot(16));
