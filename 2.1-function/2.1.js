(function () {
  function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} pepole and its capital is ${capitalCity}.`;
  }

  let france = describeCountry("France", "67 million", "Paris");
  let london = describeCountry("England", "55.98", "London");
  let germany = describeCountry("Germany", "83 million", "Berlin");

  console.log(france);
  console.log(london);
  console.log(germany);

})()