//Write a function min that takes two arguments and returns their minimum.
function min(num1, num2) {
  let number;
  num1 < num2 ? (number = num1) : (number = num2);
  return number;
}

console.log(min(4, 3));
