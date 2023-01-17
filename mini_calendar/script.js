const dateEl = document.getElementById("date");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const dayEl = document.getElementById("day");

const dateD = new Date();

dateEl.innerText = dateD.getDate();
monthEl.innerText = dateD.toLocaleString("en", { month: "long" });
yearEl.innerText = dateD.getFullYear();
dayEl.innerText = dateD.toLocaleString("en", { weekday: "long" });