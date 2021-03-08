class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  getName() {
    return this.name;
  }
  getSound() {
    return this.sound;
  }
  print() {
    console.log(`Animal name:${this.name}, sound:${this.sound}`);
  }
}

const dog = new Animal("Luky", "woof-woof");
const cat = new Animal("kitty", "miaaao");
const cow = new Animal("Tilda", "mooooo");
dog.print();
cat.print();
cow.print();