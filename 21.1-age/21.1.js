const btn = document.querySelector(".btn");
const age = document.querySelector(".age");
const msg = document.querySelector(".msg");
btn.addEventListener("click", () => {
  debugger
  if ((age.value >= 18) && (age.value <= 130)) {
    msg.textContent = "You can drink"
    msg.style.color = "green";
  }
  else if (age.value >= 1 && age.value <= 18) {
    msg.textContent = "You are too young"
    msg.style.color = "red";
  }
  else {
    msg.textContent = "Invalid age"
    msg.style.color = "orange";
  }
})