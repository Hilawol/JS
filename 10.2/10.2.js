// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.

let arr = [2, 6, -8, 10, 20];

const doubleValues = (arr) => arr.map(value => value * 2);

let newArray = doubleValues(arr);
console.log(newArray);

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

arr = [2, 6, 15, -8, 0, 9, 10, 20];

const onlyEvenValues = (arr) => arr.filter(value => value % 2 == 0);

newArray = onlyEvenValues(arr);
console.log(newArray);


// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

arr = [4, 'boy', 6, 9, 'is', 90, 'hungry']; //should return ['boy','hungry']

const showFirstAndLast = (arr) => {
  let stringsOnly = arr.filter(value => typeof (value) == 'string');
  let result = [];
  if (stringsOnly.length >= 2) {
    result = [stringsOnly[0], stringsOnly[stringsOnly.length - 1]];
  } else if (stringsOnly.length == 1) {
    result = [stringsOnly[0]];
  }
  return result;
}
console.log(showFirstAndLast(arr));


// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object‎
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.




// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

const capitalize = (str) => {

  let temp = str.split("");
  temp = temp.map(ch => String.fromCharCode(ch.charCodeAt(0) - 32)); //works only if letters are lowercase!!
  return temp.join("");
};
console.log(capitalize("hila"));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized.

function swapCase(str) {
  return str.split(" ").map((word, index) => {
    return index % 2 == 0 ?
      capitalize(word) :
      word;
  }).join(" ");
}
console.log(swapCase("today is monday and it's sunny"));