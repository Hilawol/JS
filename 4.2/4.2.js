function getGrade(score) {
  if (score >= 0 && score <= 64) {
    return "F";
  }
  else if (score >= 65 && score <= 69) {
    return "D";
  }
  else if (score >= 70 && score <= 79) {
    return "C";
  }
  else if (score >= 80 && score <= 89) {
    return "B";
  }
  else if (score >= 90 && score <= 100) {
    return "A";
  }
  else {
    return "Invalid input";
  }
}

let result = getGrade(30);
console.log(` 30 is: ${result}`);
console.log(` 66 is: ${getGrade(66)}`);
console.log(` 70 is: ${getGrade(70)}`);
console.log(` 85 is: ${getGrade(85)}`);
console.log(` 90 is: ${getGrade(90)}`);
console.log(` 100 is: ${getGrade(100)}`);
console.log(` 500 is: ${getGrade(500)}`);
