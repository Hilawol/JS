const divs = document.querySelectorAll("div");
divs.forEach((div, number) => number % 2 == 0 ? div.style.backgroundColor = "blue" : div.style.backgroundColor = "gray");