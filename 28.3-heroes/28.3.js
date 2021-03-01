// We have an array of super heroes objects:
const wonderWoman = {
  name: "Diana Prince"
}
const batman = {
  name: "Bruce Wayne"
}

const superHeroes = [wonderWoman, batman];

// and a print name function:
// We want to print the all heroes names. Implement the printHeroes function: Note: you cannot change the super heroes objects

function printName() {
  console.log(`my name is ${this.name} and ${x + y}`);
}

function printHeroes(heroes, printFunc) {
  heroes.forEach(hero => printFunc.call(hero));
}

printHeroes(superHeroes, printName);