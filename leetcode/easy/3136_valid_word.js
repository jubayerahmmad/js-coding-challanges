/**
 * 3136. Valid Word
 * A word is considered valid if:
 * It contains a minimum of 3 characters
 * It contains only digits (0-9), and English letters (uppercase and lowercase)
 * It includes at least one vowel
 * It includes at least one consonant
 * You are given a string word
 * Return true if word is valid, otherwise, return false.
 * Notes:
 * 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
 * A consonant is an English letter that is not a vowel.
 */

var isValid = function (word) {
  //   if (word.length >= 3) return true;
  //   if (word.includes("$@#")) return false;

  const regex =
    /^(?=[A-Za-z0-9]{3,}$)(?=.*[AEIOUaeiou])(?=.*[B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z])[A-Za-z0-9]+$/;
  if (regex.test(word)) {
    return true;
  } else {
    return false;
  }
};

isValid("234Adas");
