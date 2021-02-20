const toWeirdCase = (str) => {
  let arrayStr = str.split("");
  return arrayStr.map((ch, index) => {
    return index % 2 == 0 ? ch.toUpperCase() : ch.toLowerCase();
  }).join("");
}

console.log(toWeirdCase("string"));