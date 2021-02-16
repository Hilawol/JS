// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ---------> Line 9.


// 2. Which debug method did you use to find the bug?
// ---------> Reading the error log.

// 3. Explain the bug in your own words.
// ---------> There is a miss psell in the function name on line 19. 
// ---------> The number returned is not the smallest. The logic was wrong. 

// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
  if ((a > c) && (b > c)) {
    return c;
  } else if ((b > a) && (c > a)) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));