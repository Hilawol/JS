let inputBoxes = document.querySelectorAll(".box");
const submitBtn = document.querySelector(".btn");

document.addEventListener('paste', doOnPaste);

function doOnPaste() {
  console.log(event.clipboardData.getData('text/plain'));
}

inputBoxes.forEach((box, index) => {
  box.addEventListener("input", () => {
    if (index < inputBoxes.length - 1) {
      box.nextElementSibling.focus();
    }
  });
});

submitBtn.addEventListener('click', () => {
  let pwd = "";
  let inputBoxes = document.querySelectorAll(".box");
  console.log(inputBoxes);
  inputBoxes.forEach(box => {
    pwd += box.value;
    box.value = "";
  })
  console.log(pwd);
});

