/*
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
 */
function range(start, end) {
  let numbers = [];
  for (let current = start; current <= end; current++) {
    numbers.push(current);
  }
  return numbers;
}

function sum(...numbers) {
  //all argument transformed to an one array called numbers which include all given arguments
  let sum = 0;
  for (let number of numbers) {
    //this a special type of loop for arrays. every single item called number in order.
    sum += number;
  }
  return sum;
}

console.log(range(1, 3));
console.log(sum(1, 2, 3, 4, 5));
