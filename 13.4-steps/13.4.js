// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!

const steps = n => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("#");
    }
    console.log("");
  }
}

steps(10);