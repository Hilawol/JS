const check = document.querySelector(".checkbox");
const img = document.querySelector("img");
check.addEventListener("click", () => {
  img.style.display = check.checked ? "block" : "none";
})