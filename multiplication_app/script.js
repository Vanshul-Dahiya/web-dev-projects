const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.floor(Math.random() * 50);

const queEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
scoreEl.innerText = `Score : ${score}`;

queEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  // convert string to a number by adding '+'
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
