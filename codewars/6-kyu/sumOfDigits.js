// Finding sum of digits of a number until sum becomes single digit(digital root)

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
