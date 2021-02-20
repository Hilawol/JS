const myFilter = (arr, callBack) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myFilter(array, (currentValue => currentValue % 2 === 0)));//  returns array with only even values of array :2, 4, 6, 8, 10 ]



const myForeach = (arr, callBack) => {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i]);
  }
}

myForeach(array, (value => console.log(value)));//prints array


const myMap = (arr, callBack) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBack(arr[i]));
  }
  return result;
}

console.log(myMap(array, (value => value * 2)));//return an array with all elements in array multiply by 2

