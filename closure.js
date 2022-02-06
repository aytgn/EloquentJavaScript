function multiplier(factor) {
  //CARE returning value is a function not a static value!
  //also returning function takes one parameter.
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

/**WHAT PC DO?
 * 1) Look for twice method
 * 2) look for multiplier method
 * 3) pass 2 to multiplier method
 * 4) return a function that is product given number with 2 and returns that value (which is passed just before)
 * 5) pass 5 to that returned function
 * 6) log out 5*2 which is 10
 */
