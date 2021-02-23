// Create a variable that holds the <li> element with the class “start-here”.
const start = document.querySelector(".start-here");


// 1. Change the text from “title 2” to “main title”
start.textContent = "main title";

// 2. Add another sub title with the text “sub title 4”
const innerUlLastLi = start.nextElementSibling.firstElementChild.lastElementChild;
const li4 = document.createElement("li");
li4.textContent = "sub title 4";
innerUlLastLi.appendChild(li4);

// 3. Delete the last <li> element from the list.
start.nextElementSibling.nextElementSibling.remove();

// 4. Change the <title> element text to “Master Of The Dom”.
const title = start.parentElement.parentElement.previousElementSibling.children[3];
title.textContent = "Master Of The Dom";

// 5. Change the text of the <p> element ot something else of your
const p = start.parentElement.nextElementSibling.firstElementChild;
p.textContent = "Hello Hila!";



