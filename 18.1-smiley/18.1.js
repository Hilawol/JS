const smilyImg = document.createElement("div");

const text = document.querySelector(".text");

const smilyDiv = document.createElement("div");

smilyDiv.className = "smilyDiv";

const submit = document.querySelector(".submit");

const msg = document.querySelector(".msg");

smilyImg.classList.add("smiley");

submit.addEventListener("click", () => {
  let hasImgs = document.querySelectorAll(".smilyDiv>div");
  if (hasImgs) {
    hasImgs.forEach(img => img.remove());
  }
  if (parseInt(text.value) >= 0) {
    msg.style.display = "none";
    for (let i = 0; i < parseInt(text.value); i++) {
      smilyDiv.appendChild(smilyImg.cloneNode(true));
    }
    document.body.appendChild(smilyDiv);
  }
  else {
    msg.style.display = "block";
  }
});

