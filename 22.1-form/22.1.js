const btn = document.querySelector(".btn");
const lastName = document.querySelector(".lastName");
const firstName = document.querySelector(".firstName");
const email = document.querySelector(".email");
const signedInMsg = document.querySelector(".signedInMsg");


btn.addEventListener("click", function (e) {

  let msg =
    `Please review your information before submiting:
  First Name: ${firstName.value}
  Last Name: ${lastName.value}
  Email: ${email.value}
  `;
  let ok = confirm(msg);
  if (!ok) {
    e.preventDefault();
  }
  else {
    signedInMsg.style.display = "block";
  }
})