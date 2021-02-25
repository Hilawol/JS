let second = 0;
let minute = 0;
let hour = 0;
const secondSpan = document.querySelector(".seconds");
const minuteSpan = document.querySelector(".minutes");
const hoursSpan = document.querySelector(".hours");
secondSpan.textContent = second;
minuteSpan.textContent = minute;
hoursSpan.textContent = hour;
setInterval(seconds, 1000);
function seconds() {
  if (second == 59) {
    second = 0;
    minutes();
  }
  else second++;

  secondSpan.textContent = second;
}

function minutes() {
  if (minute == 59) {
    minute = 0
    hours();
  }
  else minute++;

  minuteSpan.textContent = minute;
}

function hours() {
  (hour == 23) ? hour = 0 : hour++;
  hoursSpan.textContent = hour;
}


