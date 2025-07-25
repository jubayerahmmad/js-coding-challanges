/**
 * 2722. Join Two Arrays by ID
 *
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.
 * joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
 * If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification
 * If two objects share an id, their properties should be merged into a single object
 * If a key only exists in one object, that single key-value pair should be included in the object
 * If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 */

// const join = function (arr1, arr2) {
//   const joinedArray = [];

//   for (let el of arr1) {
//     joinedArray.push(el);
//   }

//   for (let el of arr2) {
//     const idx = joinedArray.findIndex((element) => element.id === el.id);

//     if (idx !== -1) {
//       joinedArray[idx] = { ...joinedArray[idx], ...el };
//     } else {
//       joinedArray.push(el);
//     }
//   }
//   const sortedJoinedArray = joinedArray.sort((a, b) => a.id - b.id);

//   return sortedJoinedArray;
// };

// optimized solution
const join = function (arr1, arr2) {
  const result = {};

  for (let obj of arr1) {
    result[obj.id] = obj;
  }

  for (let obj of arr2) {
    if (result[obj.id]) {
      result[obj.id] = { ...result[obj.id], ...obj };
    } else {
      result[obj.id] = obj;
    }
  }

  return Object.values(result);
};

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
const res = join(arr1, arr2);
console.log(res);
// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
