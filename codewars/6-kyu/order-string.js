/**
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

function order(words) {
  if (words === "") {
    return "";
  }
  const splittedWords = words.split(" ");

  const sort = splittedWords.sort((a, b) => {
    // console.log(a.match(/\d/)); // [ '1', index: 3, input: 'Thi1s', groups: undefined ]

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

// console.log(order("is2 Thi1s T4est 3a"));
order("is2 Thi1s T4est 3a");
// order("4of Fo1r pe6ople g3ood th5e the2");
