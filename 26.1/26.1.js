// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
/**
 * will return the golbal object {}
 */
console.log(this);




// Question 2:
// a. In your own words what will this point to and why.
/**
 * returns  hello undeinfed because it is a method that is an arrow function.
 */

// b. How can you fix this code.
const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();



// Question 3:
// In your own words what will this point to and why?
/**
 * prints the this of myFuncDec 
 */
console.log("3:");
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();

// Question 4:
// In your own words what will this point to and why?
/**
 * an empty object {} becuase it is an arrow function
 */

console.log("4:");
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();


// Question 5:
// a. In your own words what will this point to and why.
// Will print its parent object
// b. How can you fix this code.
//Change to a normal function to print elemnt

// document.querySelector(".element").addEventListener(() => {
//   console.log(this);
// });