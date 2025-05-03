/***
 * A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
 * For example, take 153 (3 digits), which is narcissistic:
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 */
function narcissistic(value) {
  const length = value.toString().length;
  const arrVal = value.toString().split("");
  let sum = 0;
  for (let i = 0; i < arrVal.length; i++) {
    sum += Math.pow(arrVal[i], length);
  }

  return sum === value;
}
console.log(narcissistic(1652));
