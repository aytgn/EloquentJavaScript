// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the original
// arrays.

function flatten(...args) {
  //create a method that concat previous and current values and return it.
  let reducer = (pre, cur) => {
    return pre.concat(cur);
  };
  //reduce method take first item as a previous, next item as a current value and do what reducer says... It concat previous and current then take other item and concat it too etc..
  return args.reduce(reducer);
}

console.log(flatten([1], [2, 3], [4, 5, 6]));
