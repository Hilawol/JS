setInterval(
  seconds, 1000);
let second = 55;
let minute = 59;
let hour = 23;
const secondSpan = document.querySelector(".seconds");
const minuteSpan = document.querySelector(".minutes");
const hoursSpan = document.querySelector(".hours");
secondSpan.textContent = second;
minuteSpan.textContent = minute;
hoursSpan.textContent = hour;
function seconds() {
  if (second == 59) {
    second = 0;
    minutes();
  }
  else {
    second++;
  }
  secondSpan.textContent = second;
  console.log(second);
}

function minutes() {
  if (minute == 59) {
    minute = 0
    hours();
  }
  else {
    minute++;
  }
  minuteSpan.textContent = minute;
  console.log("minute:", minute);
}

function hours() {
  if (hour == 23) {
    hour = 0;
  }
  else {
    hour++;
  }
  hoursSpan.textContent = hour;
  console.log("hour:", hour);
}


