const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const leftSide = document.querySelector(".left-side");

menuIcon.addEventListener("click", () => {
  leftSide.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  leftSide.classList.remove("show");
});
