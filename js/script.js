var toggle = document.querySelector(".header__toggle");
var open = document.querySelector(".dropdown-menu__button--open");
var close = document.querySelector(".dropdown-menu__button--close");
var themeButton = document.querySelector(".header__button");
var currentTime = new Date().getHours();
var theme = document.querySelector(".index-page");
var titleBorder = document.querySelector(".intro__title");
var toggleMenu = document.querySelector(".header__wrap-list");
var menuAnim = document.querySelector(".header__list");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.classList.toggle("dropdown-menu__button--close1");
  close.classList.toggle("dropdown-menu__button--open1");

  toggleMenu.classList.toggle("header__list--open");
  menuAnim.classList.toggle("header__list--anim");
  theme.classList.toggle("overwlow-hidden")
 // menuAnim.style.transform= 'translate3d(0, 0, 0)';
});

function timeCheck() {
  if (currentTime > 18 || currentTime < 6) {
    theme.classList.add('dark');
    toggle.classList.add('dark__button');
    themeButton.classList.add('dark__button');
    titleBorder.classList.add('dark__border');
    toggleMenu.style.backgroundColor = "black";
    themeButton.textContent = "White theme";
  } else {
    themeButton.textContent = "Dark theme";
  }
};

timeCheck();

themeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  theme.classList.toggle("dark");
  toggle.classList.toggle('dark__button');
  themeButton.classList.toggle('dark__button');
  titleBorder.classList.toggle('dark__border');

  if (themeButton.textContent === "White theme") {
    themeButton.textContent = "Dark theme";
    toggleMenu.style.backgroundColor = "white";

  } else if (themeButton.textContent === "Dark theme") {
    themeButton.textContent = "White theme";
    toggleMenu.style.backgroundColor = "black";
  };
});


var headerr = document.querySelector(".header");

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    headerr.classList.add('header--mod');
  } else if (window.pageYOffset <= 50) {
    headerr.classList.remove('header--mod');
  }
};
