
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// Line 17.
// 2. Which debug method did you use to find the bug?
// Vscode debugger
// 3. Explain the bug in your own words.
// a. Array is 0 index base. The first item is in index 0 and last one is in index 9. 
// arr[10] is undefined and results in a NaN result. 
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30



function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));