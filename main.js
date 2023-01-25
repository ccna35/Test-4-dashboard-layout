const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const leftSideBg = document.querySelector(".left-side");
const leftSide = document.querySelector(".body");

menuIcon.addEventListener("click", () => {
  leftSide.classList.add("show");
  leftSideBg.classList.add("show-bg");
});

closeIcon.addEventListener("click", () => {
  leftSide.classList.remove("show");
  leftSideBg.classList.remove("show-bg");
});
