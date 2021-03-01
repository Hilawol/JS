// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

let myfunction = num => {
  let p = new Promise((reslove, reject) => {
    setTimeout(() => {
      if (num >= 10) {
        reslove("resolved");
      } else if (num < 10) {
        reject("rejected");
      }
    }, 2000);
  });
  return p.then(resolveValue => console.log(resolveValue)).catch(rejectValue => console.log(rejectValue));
}

myfunction(5);


