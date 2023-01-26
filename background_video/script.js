const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const fontAwesomeIcon = document.querySelector(".fa-solid");
const preloaderEl = document.querySelector(".preloader");

btnEl.addEventListener("click", () => {
  if (btnEl.classList.contains("pause")) {
    btnEl.classList.remove("pause");
    videoEl.play();

    fontAwesomeIcon.classList.add("fa-pause");
    fontAwesomeIcon.classList.remove("fa-play");
  } else {
    btnEl.classList.add("pause");
    videoEl.pause();

    fontAwesomeIcon.classList.add("fa-play");
    fontAwesomeIcon.classList.remove("fa-pause");
  }
});

window.addEventListener("load", () => {
  preloaderEl.style.zIndex = "-2";
});
