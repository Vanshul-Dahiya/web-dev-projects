const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");

// based on milliseconds
const newYearTime = new Date("Jan 1,2024 00:00:00").getTime();
updateCountDownTime();
function updateCountDownTime() {
  // based on milliseconds
  const now = new Date().getTime();

  // gap , no of days , hours left to new year
  const gap = newYearTime - now;

  console.log(gap, now, newYearTime);

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const remainingDays = Math.floor(gap / DAY);
  const remainingHours = Math.floor((gap % DAY) / HOUR);
  const remainingMinutes = Math.floor((gap % HOUR) / MINUTE);
  const remainingSeconds = Math.floor((gap % MINUTE) / SECOND);

  dayEL.innerText = remainingDays;
  hourEL.innerText = remainingHours;
  minuteEL.innerText = remainingMinutes;
  secondEL.innerText = remainingSeconds;

  setTimeout(updateCountDownTime, 1000);
}
