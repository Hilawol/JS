const countDup = (str) => {
  let strArray = str.toLowerCase().split("");
  let count = 0;
  let dup = {};
  for (let i = 0; i < str.length; i++) {
    dup[strArray[i]] ? dup[strArray[i]] += 1 : dup[strArray[i]] = 1;
  }
  for (const [ch, times] of Object.entries(dup)) {
    if (times > 1) {
      count++;
    }
  }
  return count;
}

console.log(countDup("Indivisibilities"));