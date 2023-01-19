const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", () => {
  // get position of mouse i.e x , y
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  //   create a span element
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  bodyEl.appendChild(spanEl);

  //   use this to change width & height of span
  const randomSize = Math.random() * 100;
  spanEl.style.width = randomSize + "px";
  spanEl.style.height = randomSize + "px";

  //   remove heart after 2 sec
  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});
