const peopleOntheBus = (rout) => {
  let passengersOnBus = 0; //Starting with no passengers
  for (stops of rout) {
    passengersOnBus = passengersOnBus + stops[0] - stops[1];
  }
  return passengersOnBus;
}

let rout1 = [[10, 0], [3, 5], [8, 10]];
console.log(peopleOntheBus(rout1));