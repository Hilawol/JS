const p = document.querySelector('p');
const increaseButton = document.querySelector(".increase");
const decreasedButton = document.querySelector(".decrease");
const isDisabled = (btn) => btn.classList.contains("btnDisabled");

increaseButton.addEventListener('click', increaseText);
decreasedButton.addEventListener('click', decreasedTxet);

function increaseText() {
  let fontSize = parseInt(window.getComputedStyle(p).fontSize);
  let increment = 5;
  if ((fontSize + increment) <= 100) {
    p.style.fontSize = (fontSize + increment) + "px";
  }
}

function decreasedTxet() {
  let fontSize = parseInt(window.getComputedStyle(p).fontSize);
  let increment = 5;
  if ((fontSize - increment) >= 6) {
    p.style.fontSize = (fontSize - increment) + "px";
  }
}