//function takes function.
function greaterThen(still) {
  return function (compare) {
    //greaterThen(still)(compare).... greaterThen(still) became function which should take (compare) argument
    return compare > still;
  };
}

let greaterThenTen = greaterThen(10);

let isFiveGreaterThen10 = greaterThenTen(5);
let isElevenGreaterThen10 = greaterThenTen(11);
let isTwelveGreaterThen10 = greaterThen(10)(12);

console.log(isFiveGreaterThen10);
console.log(isElevenGreaterThen10);
console.log(isTwelveGreaterThen10);
