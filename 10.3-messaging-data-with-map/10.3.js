const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//  1. Create a function that returns all the names from the array.

const getNames = (dataArray) => dataArray.map(p => p.name);
console.log(getNames(data));

// 2. Create a function that returns all the objects that are born before 1990.

const getYear = (date) => (date.split("-"))[2];

const getBornBefore = (data) => data.filter(p => getYear(p.birthday) < 1990);

console.log(getBornBefore(data));


//3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.


const findDiffrentFoods = (data) => {
  let food = {};
  data.forEach(p => {
    (p.favoriteFoods.meats).forEach(meat => { !food[meat] ? food[meat] = 1 : food[meat] += 1; });
    (p.favoriteFoods.fish).forEach(fish => { !food[fish] ? food[fish] = 1 : food[fish] += 1; });
  })
  return food;
};

console.log(findDiffrentFoods(data));