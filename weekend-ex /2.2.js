/**
 * Function recievs an array. Assuming it consists only 0 or 1. It will return the decimal value of the binary number. 
 * if  binary number is arr=[0,0,0,1] to calculate decimal we do: arr[1]* 2^0 + arr[0]* 2^1 arr[0]* 2^2 + arr[0]* 2^3 
 * I revered the array first and then using reduce multiplied each item with 2^index.
 */

const binaryToDecimal = (binaryArray) => {
  if (binaryArray.length > 0) { //Check that array is not empty.
    return binaryArray.reverse().reduce((acc, currentValue, index) => {
      return acc += currentValue * (2 ** index);
    }, 0);
  }
  else return "Array is empty";
}

console.log(binaryToDecimal([1, 1, 0, 0, 1, 0, 0]));

