var CURRENT_TIME  = new Date().getHours();
var INDEX_PAGE = document.querySelector(".index-page");
var NAV_BTN = document.querySelector(".header__button");
var TOGGLE_BTN_NAV = document.querySelector(".header__button-span--nav");
var TOGGLE_BTN_CLOSE = document.querySelector(".header__button-span--close");
var THEME_BTN = document.querySelector(".header__button-theme");
var NAV_WRAP = document.querySelector(".header__list-main");
var TITLE_BORDER = document.querySelector(".intro__title");

function timeCheck() {
  if (CURRENT_TIME > 18 || CURRENT_TIME < 6) {
    INDEX_PAGE.classList.add('dark');
    NAV_BTN.classList.add('dark__button');

    THEME_BTN.classList.add('dark__button');
    TITLE_BORDER.classList.add('dark__border');
    NAV_WRAP.style.backgroundColor = "rgb(15 15 15)";
    THEME_BTN.textContent = "White theme";
  } else {
    THEME_BTN.textContent = "Dark theme";
  }
};
timeCheck();

NAV_BTN.addEventListener("click", function (e) {
  e.preventDefault();
  TOGGLE_BTN_NAV.classList.toggle("header__button-span--close-mod");
  TOGGLE_BTN_CLOSE.classList.toggle("header__button-span--nav-mod");
  INDEX_PAGE.classList.toggle("is-locked");
  NAV_WRAP.classList.toggle("header__list-main--open");
});

THEME_BTN.addEventListener("click", function (e) {
  e.preventDefault();
  INDEX_PAGE.classList.toggle("dark");
  NAV_BTN.classList.toggle('dark__button');
  THEME_BTN.classList.toggle('dark__button');
  TITLE_BORDER.classList.toggle('dark__border');

  if (THEME_BTN.textContent === "White theme") {
    THEME_BTN.textContent = "Dark theme";
    NAV_WRAP.style.backgroundColor = "white";

  } else if (THEME_BTN.textContent === "Dark theme") {
    THEME_BTN.textContent = "White theme";
    NAV_WRAP.style.backgroundColor = "rgb(15 15 15)";
  };
});
