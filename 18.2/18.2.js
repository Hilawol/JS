document.body.width = "100vw";
document.body.height = "100vh";

// HEADER

const header = document.createElement("header");
header.style.height = "10vh";
header.style.backgroundColor = "#76b39d";
header.style.display = "flex";
header.style.justifyContent = "center";

// Navigation
const nav = document.createElement("ul");
nav.style.display = "flex";
nav.style.listStyle = "none";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.width = "500px";

let navArray = ["Home", "Buy", "Stores", "About", "Contact Us"];
for (let i = 1; i <= 6; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = navArray[i - 1];
  a.style.textDecoration = "none";
  a.style.color = "#155263";
  li.style.padding = "10px, 10px";
  li.appendChild(a);
  nav.appendChild(li);
}

header.appendChild(nav);
document.body.appendChild(header);

const container = document.createElement("section");
container.style.width = "100%";
container.style.height = "90vh";
container.style.display = "flex";

const aside = document.createElement("aside");
aside.style.backgroundColor = "#f0b917";
aside.style.flex = "1";
aside.style.width = "auto";
aside.style.height = "100%";

const main = document.createElement("main");
main.style.flex = "7";
main.style.height = "100%";
main.style.backgroundColor = "#f9f8eb";
main.style.display = "flex";

const mainImg = document.createElement("img");
mainImg.src = "https://images.unsplash.com/photo-1613928317649-48a96fc628fa?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const mainTextArea = document.createElement("div");
mainTextArea.style.padding = "50px";
const title1 = document.createElement("h1");
title1.textContent = "Main Tile here";
const p1 = document.createElement("p");
p1.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cum saepe nobis illo, eum quos nam tempora voluptatum eaque natus inventore illum! Ratione, quia quod tempore magni qui numquam laborum fuga excepturi obcaecati! Ullam possimus ut mollitia illo recusandae dolore aliquid reprehenderit? Voluptas dolorum ducimus exercitationem similique quo dicta blanditiis!"
p1.style.paddingTop = "30px";
p1.style.fontSize = "18px";
mainTextArea.appendChild(title1);
mainTextArea.appendChild(p1);

main.appendChild(mainImg);
main.appendChild(mainTextArea);

container.appendChild(aside);
container.appendChild(main);

document.body.appendChild(container);








