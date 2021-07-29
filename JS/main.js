const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuCloseBtn = document.querySelector(".close-menu")

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open")
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open")
});