function isEven(number) {
  if (number === 0) return "Even";
  if (number === 1) return "Odd";
  //1 3 5 7 9 => Odd 0 2 4 6 8 =>Even. Reach 0 and return even. Reach 1 return Odd
  else return isEven(number - 2);
}

console.log(isEven(31));
