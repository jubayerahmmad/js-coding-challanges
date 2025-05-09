/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
const createCounter = function (init) {
  let num = init;

  const obj = {
    increment: function () {
      return ++num;
    },
    decrement: function () {
      return --num;
    },
    reset: function () {
      return (num = init);
    },
  };
  return obj;
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
