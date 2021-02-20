const findUniq = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] === sortedArr[1] ? sortedArr.pop() : sorted.shift();
}

console.log(findUniq([0.55, 0, 0, 0, 0]));