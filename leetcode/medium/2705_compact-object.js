/**
 * 2705. Compact Object
 * Given an object or array obj, return a compact object.
 * A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 * Example 1:
 * Input: obj = [null, 0, false, 1]
 * Output: [1]
 * Explanation: All falsy values have been removed from the array
 *
 * Example 2:
 * Input: obj = {"a": null, "b": [false, 1]}
 * Output: {"b": [1]}
 * Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
 *
 * Example 3:
 * Input: obj = [null, 0, 5, [0], [false, 16]]
 * Output: [5, [], [16]]
 * Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 *
 */

var compactObject = function (obj) {
  if (obj === null) return obj;
  if (typeof obj !== "object") return obj;

  // Handle arrays
  if (Array.isArray(obj)) {
    const resultArray = [];
    for (const el of obj) {
      if (el) {
        if (typeof el === "object") {
          const cleaned = compactObject(el);
          resultArray.push(cleaned);
        } else {
          resultArray.push(el);
        }
      }
    }
    return resultArray;
  }

  // Handle objects
  const resultObject = {};
  for (const key in obj) {
    const value = obj[key];
    if (value) {
      if (typeof value === "object") {
        const cleaned = compactObject(value);
        // Only add if not an empty object or array
        const isEmpty =
          (Array.isArray(cleaned) && cleaned.length === 0) ||
          (typeof cleaned === "object" &&
            !Array.isArray(cleaned) &&
            Object.keys(cleaned).length === 0);
        if (!isEmpty) resultObject[key] = cleaned;
      } else {
        resultObject[key] = value;
      }
    }
  }

  return resultObject;
};

// Another way

// const compactObject = (obj) => {
//   if (obj === null) return obj;
//   if (typeof obj !== "object") return obj;
//   if (Array.isArray(obj)) {
//     return obj.filter(Boolean).map(compactObject);
//   }

//   let compacted = {};
//   for (let key in obj) {
//     let value = compactObject(obj[key]);
//     if (value) {
//       compacted[key] = value;
//     }
//   }
//   return compacted;
// };

const obj = {
  r: {
    p: null,
    d: null,
    k: 12,
    w: 39,
    e: 47,
    l: 14,
    o: 91,
    b: 64,
    i: false,
    x: false,
    r: 42,
    m: null,
    n: "",
    g: false,
    s: false,
    q: null,
    t: null,
    c: "k",
    v: true,
    a: "",
    z: "",
    j: 81,
  },
  d: 82,
  t: "",
  u: 36,
  w: null,
  h: 0,
  v: 10,
  g: 99,
  q: [
    44,
    78,
    true,
    83,
    35,
    null,
    79,
    14,
    4,
    30,
    69,
    56,
    null,
    "",
    41,
    5,
    59,
    35,
    20,
    23,
    50,
    72,
    true,
    null,
    0,
    35,
    93,
    null,
    "",
    72,
    97,
    true,
    0,
    false,
    "",
    42,
    5,
    18,
    "f",
    true,
    17,
    48,
    null,
    null,
    4,
    22,
    "",
    null,
    37,
    65,
  ],
  l: true,
  n: 0,
  p: 79,
  c: [
    0,
    51,
    8,
    0,
    "",
    null,
    66,
    null,
    0,
    "",
    null,
    "",
    65,
    false,
    58,
    "",
    6,
    55,
    51,
    null,
    true,
    0,
    28,
    true,
    49,
    83,
    48,
    null,
    true,
    "",
    67,
    null,
    28,
    false,
    33,
    76,
    44,
    72,
    67,
    null,
    40,
    61,
    91,
    "",
    true,
    null,
    true,
    10,
    66,
    true,
  ],
  m: [
    "z",
    10,
    null,
    "",
    36,
    80,
    67,
    true,
    true,
    false,
    68,
    34,
    false,
    null,
    9,
    true,
    89,
    79,
    false,
    40,
    55,
    14,
    15,
    null,
    0,
    68,
    98,
    48,
    43,
    62,
    99,
    null,
    26,
    null,
    null,
    51,
    37,
    88,
    14,
    8,
    87,
    null,
    14,
    39,
    41,
    99,
    47,
    35,
    27,
    77,
  ],
  b: 40,
  k: true,
  j: false,
  o: null,
  y: 88,
  f: "",
  i: 43,
  s: 71,
  a: 39,
};

const result = compactObject(obj);

console.log("FINAL RESULT", result);
