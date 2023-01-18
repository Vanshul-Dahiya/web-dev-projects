const textareaEL = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

// keyup -> event handler
// whenever a key is pressed on keyboard in textarea , function will trigger
textareaEL.addEventListener("keyup", () => {
  //   console.log("key is pressed");
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounter.innerText = textareaEL.value.length;
  remainingCounter.innerText =
    textareaEL.getAttribute("maxLength") - textareaEL.value.length;
}
