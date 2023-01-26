const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const leftSide = document.querySelector(".left-side");
const main = document.querySelector(".main");
const bigLogo = document.querySelector(".big-logo");
const smallLogo = document.querySelector(".small-logo");

menuIcon.addEventListener("click", () => {
  if (window.innerWidth >= "768") {
    if (main.classList.contains("lg:grid-cols-sidebar")) {
      main.classList.remove("lg:grid-cols-sidebar");
      bigLogo.classList.remove("lg:block");
      smallLogo.classList.remove("lg:hidden");
    } else {
      main.classList.add("lg:grid-cols-sidebar");
      bigLogo.classList.add("lg:block");
      smallLogo.classList.add("lg:hidden");
    }
  } else {
    console.log("No, width is not more than or equal to 768px");
    leftSide.classList.add("show");
  }
});

closeIcon.addEventListener("click", () => {
  leftSide.classList.remove("show");
});
