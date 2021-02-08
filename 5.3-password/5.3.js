
//5.1 Create a function that uses a if/else conditional expression.
const validatePasswordIf = password => {
  if (password.length > 7) {
    return "Strong";
  }
  return "Weak";
}
console.log(validatePasswordIf("12345678"));
console.log(validatePasswordIf("123458"));

//5.2 Create a function that uses a ternary conditional expression.
const validatePasswordTernary = password => {
  return ((password.length > 7) ? "Strong" : "Weak");
}


console.log(validatePasswordTernary("12345678"));
console.log(validatePasswordTernary("1234567"));


const hasCapital = str => {
  const regex = new RegExp("[A-Z]+");
  return regex.test(str);
}

//5.4 Create an “advanced” password
const advancedPassword = password => {
  return ((hasCapital(password) && password.length > 7) ? "Very Strong" :
    (password.length > 7) ? "Strong" : "Weak");
}

console.log("advancedPassword test:");
console.log(advancedPassword("Hi@la.com"));
console.log(advancedPassword("Gila"));
console.log(advancedPassword("Hi5566la@"));
console.log(advancedPassword("3Hila"));