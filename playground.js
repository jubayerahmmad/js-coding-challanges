// function Cat(name) {
//   this.name = name;
// }

// class Cat {
//   constructor() {
//     this.cache = new Map();
//   }

//   set() {
//     this.cache[5] = "apple";
//   }
//   get() {
//     this.cache;
//   }
// }
// const cat1 = new Cat();
// console.log(cat1);

// const maap = new Map();
// maap.set("name", "sam");
// console.log(maap);

// const timeoutId = setTimeout(() => {
//   console.log("Hello World");
// }, 2000);
// const timeoutId2 = setTimeout(() => {
//   console.log("Hello World");
// }, 2000);

// console.log(timeoutId, timeoutId2);

// var isEmpty = function (obj) {
//   for (let key in obj) {
//     console.log(key);

//     // If the object has at least one property, it's not empty
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isEmpty([null, true, 69]));
// console.log(isEmpty({ x: 6 }));

// Array.prototype.groupBy = function (fn) {
//   let result = {};

//   for (i = 0; i < this.length; i++) {
//     const key = fn(this[i]);
//     if (!result[key]) result[key] = [];
//     result[key].push(this[i]);
//   }
//   console.log(result);

//   return result;
// };

// [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(String); // {"1":[1],"2":[2],"3":[3]

// const join = function (arr1, arr2) {
//   const map = new Map();

//   // Insert all elements from arr1 into the map
//   for (const obj of arr1) {
//     map.set(obj.id, obj);
//   }
//   console.log(map);

//   // Merge or insert from arr2
//   for (const obj of arr2) {
//     if (map.has(obj.id)) {
//       // Merge objects: arr2 overrides arr1 on conflicts
//       map.set(obj.id, { ...map.get(obj.id), ...obj });
//     } else {
//       map.set(obj.id, obj);
//     }
//   }

//   // Convert map values to array and sort by id
//   return Array.from(map.values()).sort((a, b) => a.id - b.id);
// };

const join = function (arr1, arr2) {
  const dict = {};

  // Add all elements from arr1
  for (const obj of arr1) {
    dict[obj.id] = obj;
  }

  // Merge with elements from arr2
  for (const obj of arr2) {
    if (dict[obj.id]) {
      dict[obj.id] = { ...dict[obj.id], ...obj }; // arr2 overrides arr1
    } else {
      dict[obj.id] = obj;
    }
  }

  // Convert dict to array and sort by id
  return Object.values(dict).sort((a, b) => a.id - b.id);
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
