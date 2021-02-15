
// JavaScript – sorting strings

// Answer the following questions: a. Array of words

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending order
foods.sort(); //changes the original array
console.log(foods);

// a.2. Sort the array of strings from ascending to ascending order.
foods.reverse();  //changes the original array
console.log(foods);


// b. Lets sort an array of words that includes a word with an uppercase:

let foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

// b.1. Sort the array of strings from descending to ascending order.


const reverseWithUpperCase = (arrayTosort) => {
  const originalArray = arrayTosort; //stores the original array
  arrayTosort = arrayTosort.map(word => word.toLowerCase()); //change all the words to lowercase
  arrayTosort.reverse();//sorts with the callback function 
  return arrayTosort.map((word) => originalArray.find(OriginalWord => OriginalWord.toLowerCase() === word));
}
reverseWithUpperCase(foodsWithUpperCase);
console.log("Before reverse:", foodsWithUpperCase);
console.log("After reverse: ", reverseWithUpperCase(foodsWithUpperCase, Array.sort));


// b.2. Sort the array of strings from descending to ascending order.
const sortWithUpperCase = (arrayTosort) => {
  const originalArray = arrayTosort; //stores the original array
  arrayTosort = arrayTosort.map(word => word.toLowerCase()); //change all the words to lowercase
  arrayTosort.sort();//sorts with the callback function 
  return arrayTosort.map((word) => originalArray.find(OriginalWord => OriginalWord.toLowerCase() === word));
}
sortWithUpperCase(foodsWithUpperCase);
console.log("Before sort:", foodsWithUpperCase);
console.log("After sort: ", sortWithUpperCase(foodsWithUpperCase, Array.sort));


// c. Longest word
// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words.sort((a, b) => (b.length - a.length)));
