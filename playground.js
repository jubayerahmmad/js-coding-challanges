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
