// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.
/*
it will print:
undefined  
2

because a is printed before asiging a value to it.
If we move line 5 to be before line 3 it will print:
1
2
*/

//Block 2:

var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/**
*The block 2 will print:
*Aurelio De Rosa
*undefined
*
*getFullName() is a method of the Object obj. It tries to print this.fullName which is undefined outsite the object
*
*/


console.log("Block 3:");

function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

/**
 * Block 3 Will print:
 * undefined
 * number
 *
 * a is local to the function 
 * b is global 
 */



//  Block 4:

console.log("Block 4:");

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

/**
 * 2
 * 2
 * 
 * The functions are hoisted and the second one is the one that counts. 
 */


//  Bolck 5:

console.log("Block 5:");

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

/**
 *Block 5 will print:
 * 1
 *
 *
 * d - is global
 * e - is local varuable to the function scope therefor is not  defined outside the funcion.
 */