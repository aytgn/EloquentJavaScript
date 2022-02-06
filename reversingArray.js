// reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(items) {
  let reverseItems = [];
  for (let itemIndex = items.length - 1; itemIndex >= 0; itemIndex--) {
    //push last item, then one before until last item
    reverseItems.push(items[itemIndex]);
  }
  return reverseItems;
}

console.log(reverseArray([1, 2, 3]));

//reverseArrayInPlace,modifies the array given as argument by reversing its elements.
function reverseArrayInPlace(items) {
  //copyItems = items will be reference to same object.
  copyItems = items.slice(); //items.slice() create a copy and different reference.
  for (let index = copyItems.length - 1; index >= 0; index--) {
    //push selected item to end of to array (selection go in order)
    items.push(copyItems[index]);
    //after push, remove selected item.
    items.shift();
  }
  return items;
}

console.log(reverseArrayInPlace([1, 2, 3]));
