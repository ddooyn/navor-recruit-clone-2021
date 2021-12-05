const btnPopMobileMenu = document.querySelector(".btn-modal");
const mobileMenu = document.querySelector(".popup-menu");
const dimed = document.querySelector(".dimed");

const toggleMobileMenu = () => {
  document.querySelector(".menu-mobile").classList.toggle("on");
};

btnPopMobileMenu.addEventListener("click", toggleMobileMenu);
dimed.addEventListener("click", toggleMobileMenu);
