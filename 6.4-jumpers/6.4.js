// 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.
// for example : [5,5,8,7,-1,5] represent 2 jumpers. (The -1 means that the jump not accept)

let jumpers = [5, 5, 8, 7, -1, 10, -1, -1, -1];



// 2. Create function “avgJumper” that return average for each jumper
// example : [6,6] (the -1 is not includes on average).

const calcAvg = (a, b, c) => {
  let sum = 0,
    count = 0;
  if (a > -1) {
    sum += a;
    count++;
  }
  if (b > -1) {
    sum += b;
    count++;
  }
  if (c > -1) {
    sum += c;
    count++;
  }
  return (count > 0 ? sum / count : -1);
}

const avgJumper = jumper => {
  let result = [];
  for (let i = 0; i < jumper.length; i += 3) {
    result.push(calcAvg(jumper[i], jumper[i + 1], jumper[i + 2]));
  }
  return result;
}

console.log(avgJumper(jumpers));

// 3. Create function “bestAvgJump” return the best avg jump from all jumpers.

const getMax = arr => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

const bestAvgJump = jumpers => {
  return getMax(avgJumper(jumpers));
}
console.log(bestAvgJump(jumpers));

// 4. Create function “bestJump” return the best jump

const bestJump = jumpes => {
  return getMax(jumpers);
}

console.log("The best jump is: " + bestJump(jumpers));