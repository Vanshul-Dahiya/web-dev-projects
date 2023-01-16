// ! point to tags of date time month elements

const MONTHEL = document.querySelector(".date h1");
const DATEEL = document.querySelector(".Exactdate");
// const time = new Date().getTime().toString;
const TIMEEL = document.querySelector(".time");
const daysEL = document.querySelector(".days");

const MONTHINX = new Date().getMonth();

// ! get last date of  a particular month
// MONTHINX = JAN (0) => +1 = feb   ==> 0th day of feb -> 31 jan i.e last date of jan
//  i.e 0th date of any month = last date of previous month
const lastDate = new Date(new Date().getFullYear(), MONTHINX + 1, 0).getDate();

// ! get first day of the month
// in js , first day of week is sunday , so minus 1
// const firstDate = new Date(new Date().getFullYear(), MONTHINX, 1).getDay();
// => when monthinx =0 i.e jan =>on 1 jan this line gives 0 => sunday

const firstDay = new Date(new Date().getFullYear(), MONTHINX, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ! set month date and time
MONTHEL.innerText = months[MONTHINX];
DATEEL.innerText = new Date().toDateString();
TIMEEL.innerText = new Date().toLocaleTimeString();
// document.getElementById("p1").innerHTML = time;

let days = ``;

for (let j = firstDay; j > 0; j--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDate; i++) {
  if (i === new Date().getDate()) {
    days += `<div class = "today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEL.innerHTML = days;
