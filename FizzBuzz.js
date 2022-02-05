//First write numbers 1-100
for (let count = 1; count <= 100; count++) {
  //detect numbers that can divide 3 or 5
  if (count % 3 === 0 || count % 5 === 0) {
    //if detected number can divide 3 check if can divide to 5 too.
    if (count % 3 === 0) {
      if (count % 5 === 0) {
        //numbers both can divide to 3 and 5 log "FizzBuzz" and nothing more.
        console.log("FizzBuzz");
        continue;
      }
      //numbers can divide to 3 but not 5 will log "Fizz" and nothing more.
      console.log("Fizz");
      continue;
    }
    //numbers can divide to 5 but not 3 log "Buzz" and nothing more.
    console.log("Buzz");
    continue;
  }
  //numbers can't dive 3 or 5 will log their value and nothing more.
  console.log(count);
  continue;
}
