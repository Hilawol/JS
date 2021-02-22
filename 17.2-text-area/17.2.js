const submitBtn = document.querySelector(".submitBtn");
const textArea = document.querySelector("#text");
const msgSpan = document.querySelector(".msg");
submitBtn.addEventListener("click", () => {
  (textArea.value.length < 100) ?
    msgSpan.style.display = "inline-block" :
    msgSpan.style.display = "none";
})
