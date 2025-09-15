/**
 * 1935. Maximum numbers of words you can type
 *
 * There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
 * Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
 * Example 1:
 * Input: text = "hello world", brokenLetters = "ad"
 * Output: 1
 * Explanation: We cannot type "world" because the 'd' key is broken.
 * Example 2:
 * Input: text = "leet code", brokenLetters = "lt"
 * Output: 1
 * Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
 * Example 3:
 * Input: text = "leet code", brokenLetters = "e"
 * Output: 0
 * Explanation: We cannot type either word because the 'e' key is broken.
 */

var canBeTypedWords = function (text, brokenLetters) {
  const arrTxt = text.split(" ");
  let count = 0;
  let flag = false;

  const set = new Set(brokenLetters);
  console.log(set);

  if (!brokenLetters.length) return (count = arrTxt.length);

  for (let word of arrTxt) {
    for (let i = 0; i < brokenLetters.length; i++) {
      if (word.includes(brokenLetters[i])) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) count++;
  }
  console.log(count);

  return count;
};

// Another way
// var canBeTypedWords = function(text, brokenLetters) {
//     let count =0;
//     text = text.split(' ');
//     const set = new Set(brokenLetters)

//     for(let word of text){
//         for(const char of word){
//             if(set.has(char)){
//                 count++;
//                 break;
//             }
//         }
//     }

//     return text.length - count;
// };

// const text = "abc de";
// const brokenLetters = "";
const text = "hello world";
const brokenLetters = "ad";

canBeTypedWords(text, brokenLetters);
