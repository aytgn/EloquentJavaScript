//Create function called power. Which takes two arguments:base and exponent. If no exponent given, make its default value 2
function power(base, exponent = 2) {
  //create result variable equal to 1. Its a good idea give 1 as a starting value for product. for sum give 0
  let result = 1;
  //update result with logic and given arguments
  for (let count = 1; count <= exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(10, 10));
console.log(power(10));
