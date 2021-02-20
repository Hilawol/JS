const nb_year = (startingP, growthPrecentage, aug, pSurpass) => {
  let count = 0;
  let currentP = startingP;
  while (currentP < pSurpass) {
    currentP = currentP * ((growthPrecentage + 100) / 100) + aug;
    count++;
  }
  return count;
}

console.log(nb_year(1500000, 2.5, 10000, 2000000));