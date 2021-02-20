const mumbling = (str) => {
  let result = "";
  let strArray = str.toLowerCase().split("");
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j <= i; j++) {
      (j === 0) ? result += strArray[i].toUpperCase() : result += strArray[i];
    }
    if (i < strArray.length - 1) {
      result += "-";
    }
  }
  return result;
}
console.log(mumbling("abcdef"));