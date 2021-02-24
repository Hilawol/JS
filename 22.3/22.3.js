let myLetter;
const letter = document.querySelector(".letter");//the letter p
const msg = document.querySelector(".msg");//msg to user
let guess;
const guessedP = document.querySelector(".guessed");//letters already guessed
const againMsg = document.querySelector(".againMsg");
const again = document.querySelector(".again");//again button
const gussedLetters = [];

const randomLetter = () => {
  let az = "abcdefghigklmnopqrstuvwxyz";
  myLetter = az[Math.floor(Math.random() * 26)];
}

randomLetter();

function play(e) {
  console.log("in play")
  guess = String.fromCharCode(e.keyCode);
  console.log(guess);
  if ((/[a-zA-Z]/).test(guess)) {
    let g = guess.toLowerCase();
    if (g === myLetter) { //guessed right
      document.removeEventListener("keyup", play);
      msg.textContent = "You guessed right!"
      letter.textContent = g;
      if (msg.classList.contains("red")) {
        msg.classList.remove("red");
      }
      msg.classList.add("green");
      askAgain();
      return;
    }
    if (!gussedLetters.includes(g)) { //wrong guesse
      gussedLetters.push(g);
      msg.textContent = "Worng letter, try again";
      msg.classList.add("red");
    }
    else { //already guessed
      msg.textContent = "Letter was already guessed"
    }
    guessedP.textContent = gussedLetters.join(",");
  }
  else { //invalid input
    msg.textContent = "Invalid input, insert a letter please";
    msg.classList.add("red");
  }
  guess = "";
}

function askAgain() {
  againMsg.textContent = "Do you want to play again?";
  guessedP.classList.add("hidden");
  againMsg.classList.remove("hidden");
  again.classList.remove("hidden");
}

document.addEventListener("keyup", play);

again.addEventListener("click", () => window.location.reload());