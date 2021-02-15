// Write the following functions using the reduce built-in function.
// 1. max
const arr = [2, 3, 0, 9, -8, 50, 9];

const maxReducer = (max, currentValue) => currentValue > max ? currentValue : max;
let max = arr.reduce(maxReducer, 0);
console.log(max);

// 2. sum of even numbers
const sumOfEvenReducer = (sum, currentValue) => currentValue % 2 == 0 ? sum += currentValue : sum;
let sumOfEven = arr.reduce(sumOfEvenReducer, 0);
console.log(sumOfEven);

// 3. average
const sumReducer = (avg, currentValue) => avg + currentValue;
let avg = arr.reduce(sumReducer) / arr.length;
console.log(avg);

