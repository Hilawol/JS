
// 1. Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables.
let girl1 = {
  name: "Yana"
};
let girl2 = {
  name: "Rachel"
};
let girl3 = {
  name: "hila"
};


// 2. Create a new Map object that sets each object as a key and assign an id number as the value.

let myMap = new Map();
myMap.set(girl1, 1111);
myMap.set(girl2, 1112);
myMap.set(girl3, 1113);

console.log("Thw map has: " + myMap.size + " objects");
console.log(myMap);

// 3. Iterate over the Map object with the for..of loop. - log the name and id

for (let [obj, id] of myMap) {
  console.log(`Name: ${obj.name}: id:${id}`)
}
