// Create array with numbers :

let arr = [1, 7, 3, 0, -5, 7, 3, 9];

// 1. Print with for loop all the number.

const printArr = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Array in index ${i} is: ${arr[i]}`);
  }
}
printArr(arr);

// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
//Array is not empty ,a and last item is unique. 
const arrayLength = arr => {
  let item = arr.pop();
  arr.push(item);
  let index = arr.indexOf(item);
  return index + 1;
}
console.log(`${arr} length is: ${arrayLength(arr)}`);

// 3. Create function “arraySum” , the function return the sum of all elements in array.
const sumArr = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(`The sum of the array is: ${sumArr(arr)}`);

// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array. 
const multiplyArr = arr => {
  let multiplay = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplay *= arr[i];
  }
  return multiplay;
}
arr = [1, 7, 3, -5, 7, 3, 9];
console.log(`The multiplicatio of the array is: ${multiplyArr(arr)}`);