function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function getWinner(p1Name, p1Score, p2Name, p2Score, p3Name = "", p3Score = 0) {
  if ((p1Score > p2Score) && (p1Score > p3Score)) {
    return `${p1Name} is the winner. With score: ${p1Score}`;
  }
  else if ((p2Score > p1Score) && (p2Score > p3Score)) {
    return `${p2Name} is the winner with score: ${p2Score}`;
  }
  else if ((p3Score > p1Score) && (p3Score > p2Score)) {
    return `${p3Name} is the winner with score: ${p3Score}`;
  }
  else if ((p1Score == p2Score) && (p1Score == p3Score)) {
    return `It is a tie with score: ${p1Score}`;
  }
  else if (p1Score == p2Score) {
    return `${p1Name} and ${p2Name}  won with score: ${p1Score}`;
  }
  else if (p1Score == p3Score) {
    return `${p1Name} and ${p3Name}  won with score: ${p1Score}`;
  }
  else if (p2Score == p3Score) {
    return `${p2Name} and ${p3Name}  won with score: ${p2Score}`;
  }
}

let p1Name = "John",
  p2Name = "Mike",
  p3Name = "Mary",
  p1Score, p2Score, p3Score;

p1Score = calcAverage(89, 120, 103);
console.log(`${p1Name} score is: ${p1Score}`);
p2Score = calcAverage(116, 94, 123);
console.log(`${p2Name} score is: ${p2Score}`);
p3Score = calcAverage(97, 134, 105);
console.log(`${p3Name} score is: ${p3Score}`);

console.log(getWinner(p1Name, p1Score, p2Name, p2Score));//Mike wins 
console.log(getWinner(p1Name, p1Score, p2Name, p2Score, p3Name, p3Score));//Mary wins
console.log(getWinner(p1Name, 800, p2Name, 800, p3Name, p3Score));//John and Mike
console.log(getWinner(p1Name, 800, p2Name, 800));//John and Mike
console.log(getWinner(p1Name, 800, p2Name, p2Name, p3Name, 800));//John and Mary
console.log(getWinner(p1Name, 800, p2Name, 800, p3Name, 800));//All tie





