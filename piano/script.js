const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  // start from 1 ...as i=0 => 0+1 => 1
  // if i < 9 => number = 01,02..09....else number = 10,11,..24
  const number = i < 9 ? "0" + (i + 1) : i;
  const newUrl = "24-piano-keys/key" + number + ".mp3";

  pianoKey.addEventListener("click", () => playSound(newUrl));
});
