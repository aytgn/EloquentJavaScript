function countBs(str) {
  let numberOfBeans = 0;
  for (count = 0; count <= str.length - 1; count++) {
    if (str[count] === "B") numberOfBeans++;
  }
  return numberOfBeans;
}
console.log(countBs("BBB"));
