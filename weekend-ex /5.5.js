const abbreviate = (name) => {
  return name.split(" ").map(value => {
    return value.split("")[0].toUpperCase();
  }).join(".");
}

console.log(abbreviate("Hila Kershenovich"));