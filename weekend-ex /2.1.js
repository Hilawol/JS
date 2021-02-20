const twoLowestSum = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.length >= 2 ? sortedArr[0] + sortedArr[1] : -1 //checks that there are at least two items and return their sum, otherwise -1
}

let a = [19, 5, 42, 2, 77];
console.log(twoLowestSum(a));
a = [10, 343445353, 3453445, 3453545353453];
console.log(twoLowestSum(a));