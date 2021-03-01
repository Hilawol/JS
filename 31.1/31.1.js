// Here we are requesting for food recipe Ids. We get an array of Ids once consumed.


const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });


//   Here we are fetching a recipe with a given Id.
// We are getting a recipe as an object once consumed.

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = { title: "Fresh tomato pasta", publisher: "Pinchas Hodadad", };
      resolve(`${ID}: ${recipe.title}`);
    },
      1500,
      recipeID);
  });
};


// Here we are consuming the promise.
// Getting the Ids, then getting a recipe with the id in the index 2.

getIDs().then((IDs) => {
  console.log("1", IDs);
  return getRecipe(IDs[2]);
})
  .then((recipe) => {
    console.log("2", recipe);
  })
  .catch((error) => {
    console.log("It is an error!");
  });

// Your task is to convert the consumed promise 
// not to use .then and .catch but to use the modern way using async and await.

async function run() {
  const listId = await getIDs();
  console.log("3", listId);
  const recipe = await getRecipe(listId[2]);
  console.log("4", recipe);
}
run();