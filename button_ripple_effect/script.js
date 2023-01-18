const btnEl = document.querySelector(".btn");

// event = position of x , y
btnEl.addEventListener("mouseover", (event) => {
  //   console.log(event.pageX);
  //   console.log(event.pageY - btnEl.offsetTop);

  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
