/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 *
 * Steps to solve:
 * 1. Check the first three elements of the array to determine the unique number's pattern.
 * 2. If the first element is different from the second and third, return the first element.
 * 3. Otherwise, iterate through the array starting from the second element.
 * 4. Compare each element with the first element to find the unique number.
 * 5. Return the unique number once found.
 */

/* function findUniq(arr) {
  let unique = {};
  for (const element in arr) {
    let el = arr[element];

    if (unique[el]) {
      unique[el]++;
    } else {
      unique[el] = 1;
    }
  }

  for (const key in unique) {
    if (unique[key] === 1) {
      return key;
    }
  }
 }
*/

//*  more optimized
function findUniqueNum(arr) {
  const firstEl = arr[0];
  if (firstEl !== arr[1] && firstEl !== arr[2]) return firstEl;
  for (i = 1; i < arr.length; i++) {
    if (firstEl !== arr[i]) {
      return arr[i];
    }
  }
}

console.log(findUniqueNum([2, 1, 1, 1, 1]));
