const bgImgEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  //  ! as we scroll , just decrease the opacity
  // upon scrolling , pageYoffset decreases , so use it
  bgImgEl.style.opacity = 1 - window.pageYOffset / 800;

  bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 10 + "%";
}
