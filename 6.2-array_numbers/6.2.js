// For each of the questions below, answer the question’s with this array:
let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a loop, iterate through this array and console.log all of the people.
const printArr = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Array in index ${i} is: ${arr[i]}`);
  }
}
printArr(people);

// 2. Write the command to remove "Greg" (first item) from the array.
people.shift();
console.log("Array after shift:");
printArr(people);

// 3. Write the command to remove "James" (last item) from the array.
people.pop();
console.log("Array after pop:");
printArr(people);

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log("Array after unshift:");
printArr(people);

// 5. Write the command to add your name to the end of the array.
people.push("Hila");
console.log("Array after push:");
printArr(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.
console.log("Print until after Mary:");
let keepPrinting = false;
for (let i = 0; !keepPrinting; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") {
    keepPrinting = true;
  }
}

// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
console.log(people.slice(2, 4));

// 8. Write the command that gives the indexOf where "Mary" is located.
console.log("The index of Mary is: " + people.indexOf("Mary"));

// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
console.log("The index of Foo is: " + people.indexOf("Foo"));

// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
people = ["Greg", "Mary", "Devon", "James"];

let endSlice = people.indexOf("Devon"); //returns the index of the element to remove.
let tempArray = people.slice(0, endSlice); //slice the array until the element to remove.

tempArray.push("Elizabeth"); //push new element
tempArray.push("Artie");//push new element

tempArray.push(people.slice(people.indexOf(endSlice) + 1, people.length));//push the rest of the original array after the removal. 
people = tempArray; //assign the new array to our original array.

printArr(people);


// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob"
let withBob = people.concat(["Bob"]);
console.log("with Bob is: " + withBob);
