var currDate, finalDate, timer, toDays, toHours, toMins, toSecs;
var dayEl, hourEl, minEl, secEl;

function startTimer() {
  currDate = new Date();
  var diff = finalDate - currDate;
  
  var days = parseInt(diff / toDays);
  var hours = parseInt((diff % toDays) / toHours);
  var mins = parseInt((diff % toHours) / toMins);
  var sec = parseInt((diff % toMins) / toSecs);
  
  dayEl.innerText = days;
  hourEl.innerText = hours;
  minEl.innerText = mins;
  secEl.innerText = sec;
}


document.addEventListener("DOMContentLoaded", () => {
  dayEl = document.getElementById("day");
  hourEl = document.getElementById("hour");
  minEl = document.getElementById("min");
  secEl = document.getElementById("sec");
  
  finalDate = new Date("1/17/2020");
  
  toDays = 1000 * 60 * 60 * 24;
  toHours = toDays / 24;
  toMins = toHours / 60;
  toSecs = toMins / 60;
  
  timer = setInterval(startTimer, 1000);
});
