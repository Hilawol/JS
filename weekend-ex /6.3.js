
const longest = (s1, s2) => {
  let result = [];
  const addString = (str) => {
    for (const ch of str) {
      if (!result.includes(ch)) {
        result.push(ch);
      }
    }
  }
  addString(s1);
  addString(s2);
  return result.sort().join("");
}

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a, b)); // "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
console.log(longest(a, a));// "abcdefghijklmnopqrstuvwxyz"



