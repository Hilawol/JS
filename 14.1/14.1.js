// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ----> Problem is in line 13,21

// 2. Which debug method did you use to find the bug?
// ----> Setting breakpoints in the vsCode

// 3. Explain the bug in your own words.
// ----> In line 24 there was a comma ',' missing
//       sum was declared as const, and later was asigned a value.

// 4. Fix the code and submit it all.



function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]);