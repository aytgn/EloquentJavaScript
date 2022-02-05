// //*****first try to log 8 hashes*****//
// let strHashes = "";
// for (let count = 1; count <= 8; count++) {
//   //add one hash to strHash
//   strHashes += "#";
// }
// //log when strHashes ready.
// console.log(strHashes);

// //*****Now, log # # # # # .. pattern *****/
// let hashSpacePattern = "";
// for (let count = 1; count <= 8; count++) {
//   if (count % 2 === 0) hashSpacePattern += "#";
//   hashSpacePattern += " ";
// }
// console.log(hashSpacePattern);

//*****Lastly, log # # # # # .. pattern for each row that pattern will be reverse(or smh)  *****/
for (let rowCount = 1; rowCount <= 8; rowCount++) {
  //building row by cols
  let rowStr = "";
  let lastChar = "";
  //whenever row count is even start with # otherwise start with space
  rowCount % 2 === 0 ? (rowStr = "#") : (rowStr = " ");
  //for every col...
  for (colCount = 1; colCount <= 8; colCount++) {
    //check rowStr's last character
    lastChar = rowStr.charAt(rowStr.length - 1);
    //if last character is # add to rowStr space or other way around
    lastChar === "#" ? (rowStr += " ") : (rowStr += "#");
  }
  //log out the row
  console.log(rowStr);
}
