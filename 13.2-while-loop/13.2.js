// Write a function that will receive an array of strings and will return a new array 
// containing all the lengths of all the strings in the array it got as a parameter.
// So that if you call this function with this array for example: ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

// 1. Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.

const countLentgh = arr => {
  let result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr[index].length);
    index++;
  }
  return result;
}

console.log(countLentgh(["boo", "doooo", "hoo", "ro"]));//[3, 5, 3, 2]
console.log(countLentgh([]));//[]