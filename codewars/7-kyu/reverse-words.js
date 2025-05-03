/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 * "This is an example!" ==> "sihT si na !elpmaxe"
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
