// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ----> Problems are in lines 13,21,24

// 2. Which debug method did you use to find the bug?
// ----> Setting breakpoints in the vsCode

// 3. Explain the bug in your own words.
// ----> 1.In line 24 there was a comma ',' missing
//       2.sum was declared as const, and later was asigned a value.
//       3.The function returns undefined. A return value was missing in the function. 


// 4. Fix the code and submit it all.

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));