const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "Android App Developer", "Freelancer"];

let careerIndex = 0;

let characterInd = 0;

updateText();

function updateText() {
  characterInd++;

  containerEl.innerHTML = `<h1> I AM ${
    careers[careerIndex].slice(0, 1) === "A" ? "AN" : "A"
  }  ${careers[careerIndex].slice(0, characterInd)} </>`;

  if (characterInd == careers[careerIndex].length) {
    careerIndex++;
    characterInd = 0;
  }

  if (careerIndex == careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 300);
}
