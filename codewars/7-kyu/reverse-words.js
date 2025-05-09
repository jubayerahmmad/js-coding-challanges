/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * Steps to solve:
 * 1. Split the input string into an array of words using spaces as the delimiter.
 * 2. Iterate through each word in the array.
 * 3. Reverse each word by splitting it into characters, reversing the array of characters, and joining them back together.
 * 4. Push the reversed word into a new array.
 * 5. Join the new array of reversed words back into a single string with spaces in between.
 * 6. Return the resulting string.
 */

function reverseWords(str) {
  const arrStr = str.split(" ");
  let newArr = [];

  for (let i = 0; i < arrStr.length; i++) {
    newArr.push(arrStr[i].split("").reverse().join(""));
  }
  return newArr.join(" ");
}
console.log(reverseWords("Hello World"));

// little bit better approach
const reverseWordsTWO = (str) => {
  let word = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }
      word = "";
      result += " ";
    }
  }
  for (let j = word.length - 1; j >= 0; j--) {
    result += word[j];
  }

  return result;
};

console.log(reverseWordsTWO("Hello World"));
