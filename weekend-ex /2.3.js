const findNextSquare = (number) => {
  let square = Math.sqrt(number);
  return Number.isInteger(square) ? (square + 1) ** 2 : -1
}

console.log(findNextSquare(625));
