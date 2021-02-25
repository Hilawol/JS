let miliSecond = 0;
let second = 0;
let minute = 0;

const miliSecondSpan = document.querySelector(".miliSeconds");
const secondSpan = document.querySelector(".seconds");
const minuteSpan = document.querySelector(".minutes");
const stopBtn = document.querySelector(".stop");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

stopBtn.addEventListener("click", stopFunction);
startBtn.addEventListener("click", startFuntion);
resetBtn.addEventListener("click", resetFunction);

let interval;

miliSecondSpan.textContent = '0' + miliSecond;
secondSpan.textContent = '0' + second;
minuteSpan.textContent = '0' + minute;

function miliSeconds() {

  if (miliSecond == 99) {
    miliSecond = 0;
    seconds();
  }
  else miliSecond++;
  if (miliSecond < 10) {
    miliSecondSpan.textContent = '0' + miliSecond;
  }
  else miliSecondSpan.textContent = miliSecond;
}

function seconds() {
  if (second == 59) {
    second = 0;
    minutes();
  }
  else second++;
  if (second < 10) {
    secondSpan.textContent = '0' + second;
  }
  else secondSpan.textContent = second;
}

function minutes() {
  if (minute == 59) {
    minute = 0;
  }
  else minute++;

  minuteSpan.textContent = minute;
}

function startFuntion() {
  interval = setInterval(miliSeconds, 10);
  startBtn.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled", "false");
}

function stopFunction() {
  clearInterval(interval);
  startBtn.removeAttribute("disabled", "false");
  stopBtn.setAttribute("disabled", "true");
}

function resetFunction() {
  window.location.reload();

}