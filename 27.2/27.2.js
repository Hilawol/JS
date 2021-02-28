// Create three instances of the Pokemon and save them in a variable. 

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const p1 = new Pokemon("p1Name", "type1", ["punch", "kick"]);
const p2 = new Pokemon("p2Name", "type1", ["punch", "kick", "fire"]);
const p3 = new Pokemon("p3Name", "type2", ["punch", "freeze"]);


// 2. Using prototype properties, add the following methods:
// • A method called callPokemon that will print the following: “I choose you, <pokemon name>

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
}
// • A method called attack that takes one parameter, an attack number, that will print the specific attack method from the pokemonAttackList array as the following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
Pokemon.prototype.attack = function (attack) {
  if (attack < this.attackList.length) {
    console.log(`${this.name} used ${this.attackList[attack]}`);
  } else console.log("invalid attack");
}



p1.callPokemon();
p2.callPokemon();
p3.callPokemon();

p1.attack(0);
p2.attack(2);
p3.attack(1);



