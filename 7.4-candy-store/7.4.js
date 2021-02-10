const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },],
  cashRegister: 200,
}

// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
function getCandy(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (candyStore.candies[i].id === id) {
      return candyStore.candies[i];
    }
  }
}

console.log(getCandy(candyStore, "5hd7y"));//{ name: 'twix', id: '5hd7y', price: 5, amount: 4 }


// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}
console.log(getPrice(candyStore, "5hd7y"));//5

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
function addCandy(candyStore, candyId, candyName, candyPrice, candyAmount = 1) {
  let candy = {
    name: candyName,
    id: candyId,
    price: candyPrice,
    amount: candyAmount
  }
  candyStore.candies.push(candy);
}

addCandy(candyStore, "j9kd9", "m&m", 6);
console.log(candyStore.candies);

// 4. Implement the following buy function: 
// The function should add the candy price to the cashRegister, 
// and decrease the amount property of the relevant candy.
function buy(candyStore, id) {
  let candy = getCandy(candyStore, id);
  if (candy.amount >= 1) {
    candy.amount -= 1;
    candyStore.cashRegister += candy.price;
  }
}

buy(candyStore, "j9kd9");
console.log(candyStore);