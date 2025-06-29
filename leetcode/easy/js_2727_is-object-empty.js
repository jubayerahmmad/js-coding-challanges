/**
 * 2727. Is Object Empty
 *
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 * You may assume the object or array is the output of JSON.parse.
 */

var isEmpty = function (obj) {
  for (let key in obj) {
    console.log(key);

    // If the object has at least one property, it's not empty
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

console.log(isEmpty([null, true, 69]));
console.log(isEmpty({ x: 6 }));

// var isEmpty = function (obj) {
//   console.log(Object.keys(obj)); // [ '0', '1', '2' ]

//   return Object.keys(obj).length === 0 ? true : false;
// };

// console.log(isEmpty([null, true, 69]));
