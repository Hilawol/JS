// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.

// -----------> Line 18
// 2. Which debug method did you use to find the bug?
// consloe log
// 3. Explain the bug in your own words.
// when adding 1 to the counter the "=" was missing, caussing the new value 
// not being assigned to the parameter,
// 4. Fix the code and submit it all.


function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));