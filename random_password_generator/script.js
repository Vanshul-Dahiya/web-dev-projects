const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();

  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2500);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // set password length
  const passwordLen = 10;
  let password = "";
  for (let index = 0; index < passwordLen; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    [];
  }
  inputEl.value = password;
}

function copyPassword() {
  inputEl.select();
  //   for mobile
  inputEl.setSelectionRange(0, 9999);
  //   copy text
  navigator.clipboard.writeText(inputEl.value);

  alertContainerEl.innerText = inputEl.value + " copied!!";
}
