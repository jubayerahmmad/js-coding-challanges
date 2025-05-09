/**
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 *
 * Steps to solve:
 * 1. Check if the input string is empty. If it is, return an empty string.
 * 2. Split the input string into an array of words using the space character as a delimiter.
 * 3. Sort the array of words based on the number present in each word.
 *    - Use a regular expression to extract the number from each word.
 *    - Convert the extracted number to an integer and compare it to sort the words in ascending order.
 * 4. Join the sorted array of words back into a single string with spaces between them.
 * 5. Return the resulting sorted string.
 */

function order(words) {
  if (words === "") {
    return "";
  }
  const splittedWords = words.split(" ");

  const sort = splittedWords.sort((a, b) => {
    // console.log(a.match(/\d/)); // returns [ '1', index: 3, input: 'Thi1s', groups: undefined ]
    return parseInt(a.match(/\d/)[0]) - parseInt(b.match(/\d/)[0]);
  });
  console.log(sort.join(" "));
}

// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }

order("is2 Thi1s T4est 3a");
