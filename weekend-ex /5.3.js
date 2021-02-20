const toCamelCase = (str) => {
  let arrayStr = str.includes("-") ? str.split("-") : str.split("_");

  for (let i = 1; i < arrayStr.length; i++) {
    let word = arrayStr[i].split("");
    word[0] = word[0].toUpperCase();
    arrayStr[i] = word.join("");
  }
  return arrayStr.join("");

}
console.log(toCamelCase("the_boy_who"));