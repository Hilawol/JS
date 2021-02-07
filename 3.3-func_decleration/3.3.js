(function () {

  const worldPopulation = 7900;
  function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
  }
  let mexicoPopulation = percentageOfWorld1(127.6);
  console.log(`Mexico's percentage of the world population is:${mexicoPopulation}`);
  let israelPopulation = percentageOfWorld1(9);
  console.log(`Israel's percentage of the world population is:${israelPopulation}`);
  let ecuadorPopulation = percentageOfWorld1(17.37);
  console.log(`Ecuador's percentage of the world population is:${ecuadorPopulation}`);

  let percentageOfWorld2 = population => (population / worldPopulation) * 100;

  mexicoPopulation = percentageOfWorld2(127.6);
  console.log(`Mexico's percentage of the world population is:${mexicoPopulation}`);
  israelPopulation = percentageOfWorld2(9);
  console.log(`Israel's percentage of the world population is:${israelPopulation}`);
  ecuadorPopulation = percentageOfWorld2(17.37);
  console.log(`Ecuador's percentage of the world population is:${ecuadorPopulation}`);
})()