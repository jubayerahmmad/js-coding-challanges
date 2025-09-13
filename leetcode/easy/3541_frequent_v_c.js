/**
 *
 * 3541. Find most frequent Vowel and Consonant
 *
 * You are given a string s consisting of lowercase English letters ('a' to 'z')
 * Your task is to:
 * Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 * Find the consonant (all other letters excluding vowels) with the maximum frequency.
 * Return the sum of the two frequencies.
 * Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.
 * The frequency of a letter x is the number of times it occurs in the string.
 * Example 1:
 * Input: s = "successes"
 * Output: 6
 * Explanation:
 * The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
 * The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
 * The output is 2 + 4 = 6.
 * Example 2:
 * Input: s = "aeiaeia"
 * Output: 3
 * Explanation:
 * The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
 * There are no consonants in s. Hence, maximum consonant frequency = 0.
 * The output is 3 + 0 = 3.
 * Constraints:
 * 1 <= s.length <= 100
 * s consists of lowercase English letters only
 *
 */

// var maxFreqSum = function (s) {
//   const vowel = new Map();
//   const consonant = new Map();

//   for (let i = 0; i < s.length; i++) {
//     const el = s[i];
//     if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
//       vowel.set(el, (vowel.get(el) || 0) + 1);
//     } else {
//       consonant.set(el, (consonant.get(el) || 0) + 1);
//     }
//   }

//   let mostV = 0;
//   let mostC = 0;

//   vowel.forEach((v) => {
//     if (v > mostV) mostV = v;
//   });

//   consonant.forEach((c) => {
//     if (c > mostC) mostC = c;
//   });

//   return mostV + mostC;
// };

// CLEANER WAY
var maxFreqSum = function (s) {
  const map = new Map();
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    map.set(el, (map.get(el) || 0) + 1);
  }

  let mostV = 0;
  let mostC = 0;

  for (const [char, count] of map) {
    if (vowels.has(char)) {
      if (count > mostV) mostV = count;
    } else {
      if (count > mostC) mostC = count;
    }
  }
  //   console.log(map);
  //   console.log(mostC + mostV);

  return mostV + mostC;
};

const s = "successes";

maxFreqSum(s);
