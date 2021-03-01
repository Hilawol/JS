const baseEndPoint = "https://swapi.dev/api/people/";
const charachters = [];
class Charachter {
  constructor(name, height, hairColor) {
    this.name = name;
    this.height = height;
    this.hair_Color = hairColor;
  }

  getKeys() {
    const keys = [];
    for (const [key, value] of Object.entries(this)) {
      if (typeof (value) === "object") {
        for (const [k, v] of Object.entries(value)) {
          keys.push(k);
        }
      }
      else {
        keys.push(key);
      }
    }
    return keys
  }

  getValues() {
    const values = [];
    for (const [key, value] of Object.entries(this)) {
      if (typeof (value) === "object") {
        for (const [k, v] of Object.entries(value)) {
          values.push(v);
        }
      }
      else {
        values.push(value);
      }
    }
    return values;
  }

}



class Planet {
  constructor(name, population) {
    this.planet_name = name;
    this.planet_population = population;
  }
}

async function fetchCharachters() {
  let query = baseEndPoint;
  for (let i = 1; i <= 10; i++) {
    let p = `${i}/`;
    const result = await fetch(query + p);
    const data = await result.json();
    const charchter = new Charachter(data.name, data.height, data.hair_color);
    const planetQuery = data.homeworld;
    const planetResult = await fetch(planetQuery);
    const planetData = await planetResult.json();
    let planet = new Planet(planetData.name, planetData.population);
    charchter.planet = planet;
    charachters.push(charchter);
  }
}

async function buildTable() {
  try {
    await fetchCharachters();
  } catch (err) {
    console.log(err);
  }
  const table = document.createElement("table");
  table.style.width = "700px";
  table.style.margin = "auto";

  const mainHeader = document.createElement("tr");
  let th = document.createElement("th");
  th.textContent = "Star Wars";
  th.style.color = "white";
  th.style.background = "#a2bf39";
  th.colSpan = 5;
  mainHeader.appendChild(th);
  table.appendChild(mainHeader);

  const ligthColor = "#ecf2d7";
  const darkColor = "#c7d888";

  const secondHeader = document.createElement("tr");
  const keys = charachters[0].getKeys();
  for (let key of keys) {
    let th = document.createElement("th");
    th.textContent = key.split("_").join(" ");
    secondHeader.appendChild(th);
  }
  secondHeader.style.backgroundColor = darkColor;
  table.appendChild(secondHeader);

  charachters.forEach((ch, index) => {
    const tr = document.createElement("tr");
    const values = ch.getValues();
    values.forEach(v => {
      const td = document.createElement("td");
      td.style.textAlign = "center";
      td.textContent = v;
      tr.appendChild(td);
    })
    tr.style.backgroundColor = index % 2 == 0 ? ligthColor : darkColor;
    table.appendChild(tr);
  })

  document.body.appendChild(table);
}

buildTable();




