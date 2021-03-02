// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    (words.filter(word => typeof (word) != "string")).length > 0 ?
      reject("invalid input") :
      resolve(words.map(word => word.toUpperCase()));
  });
}

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    resolve(words.sort());
  })
}

makeAllCaps(["zthis", "cis", "bm4"])
  .then(capsWords => sortWords(capsWords))
  .then(sortedCapsWords => console.log(sortedCapsWords)).catch(err => console.log(err));


