class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  getBrand() {
    return this.brand;
  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  print() {
    console.log(`Car brand:${this.brand}, speed:${this.speed}`);
  }
}

const c1 = new Car("Toyota", 100);
const c2 = new Car("Audi", 120);
const c3 = new Car("Skoda", 100);
const c4 = new Car("BMW", 130);
const cars = [c1, c2, c3, c4];

const fastestCar = cars.reduce((max, current) => { return current.getSpeed() > max.getSpeed() ? current : max });
fastestCar.print();


function sortCars(carsArray) {
  return carsArray.sort((car1, car2) => car1.getSpeed() - car2.getSpeed());
}
console.log(sortCars(cars));