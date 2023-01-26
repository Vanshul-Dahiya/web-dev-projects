const que = document.querySelectorAll(".question");

que.forEach((question) => {
  // search in each question
  const btn = question.querySelector(".questionBtn");

  btn.addEventListener("click", () => {
    // if there is show-text class ,remove it
    // else add  it
    question.classList.toggle("show-text");
  });
});
