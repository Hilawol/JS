// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.


const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
  "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
  "Hamburgers"];

const compareArrys = (array1, array2) => {
  let same = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        same.push(array1[i]);
      }
    }
  }
  return same.length > 0 ? same : false;
}

console.log(compareArrys(food, food1));
