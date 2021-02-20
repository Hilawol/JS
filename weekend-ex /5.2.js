const stringRepeat = (num, str) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(stringRepeat(4, "x"));