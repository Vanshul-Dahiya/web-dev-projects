const imageContainerEl = document.querySelector(".image-container");
const prevBtnEl = document.getElementById("prev");
const nextBtnEl = document.getElementById("next");

let rotationDeg = 0;
let timer;
prevBtnEl.addEventListener("click", () => {
  rotationDeg += 45;
  clearTimeout(timer);
  updateGal();
});
nextBtnEl.addEventListener("click", () => {
  rotationDeg -= 45;
  clearTimeout(timer);
  updateGal();
});

function updateGal() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${rotationDeg}deg) `;

  timer = setTimeout(() => {
    rotationDeg -= 45;
    updateGal();
  }, 2000);
}

updateGal();
