// ?Return a new array with the strings filtered out
function filter_list(l) {
  const newArray = [];

  for (let listItem of l) {
    if (typeof listItem === "number") newArray.push(listItem);
  }

  return newArray;
}
console.log(filter_list([1, 2, "a", "b"]));
