// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

const isString = (param, callback) => {
  typeof (param) === 'string' ? callback(param) : console.log("Not a string");
};

let logParam = (param) => console.log(param) //The callback function
isString("hila", logParam);
isString(2);

// 2. Create a function called ‘firstWordUpperCase’ that receives 2 arguments,
//  a string and a callback function.
// The function will capitalize the first word in the sentence 
// and pass the string to a callback function which will create dashes between the words.

const firstWordUpperCase = (str, addDash) => {
  let splitStr = str.split(" ");
  if (splitStr) {
    splitStr[0] = splitStr[0].toUpperCase();
    str = splitStr.join(" ");
    return addDash(str);
  }
};

const addDash = (str) => {
  let splitStr = str.split(" ");
  return splitStr.join("-");
};

let str = "This is my string.";
console.log(firstWordUpperCase(str, addDash));


// 3. Call the ‘firstWordUpperCase’ function with a callback of your choice.
const starSeperator = (str) => {
  return str.split(" ").join("*");
};

console.log(firstWordUpperCase(str, starSeperator));