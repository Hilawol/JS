const isIsogram = (str) => {
  let letters = [];
  for (letter of str.toLowerCase()) {
    if (letters.includes(letter)) {
      return false;
    }
    letters.push(letter);
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));//true
console.log(isIsogram("aba"));//false
console.log(isIsogram("moOse"));//false
console.log(isIsogram(""));//ture