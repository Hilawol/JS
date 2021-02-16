
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.

// ----------->Line 11. 

// 2. Which debug method did you use to find the bug?
// ----------->Vscode debugger

// 3. Explain the bug in your own words.

// ------------> The sum parameter was used without intialiizing it with a value before using it. 
// Also the sum was not divided by the amount of numbers. 

// 4. Fix the code and submit it all.

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));