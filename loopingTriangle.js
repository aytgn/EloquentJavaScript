for (let count = 1; count <= 7; count++) {
  //transform count to string number of #
  //add strHash one "#" for count number
  let strHash = "";
  let addedHash = "";
  while (addedHash < count) {
    strHash = strHash + "#";
    addedHash++;
  }
  console.log(strHash);
}
