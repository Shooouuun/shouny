var toggle__nav = document.querySelector(".page-header__trigger"),
    nav = document.querySelector(".page-header__list");

    toggle__nav.classList.remove("page-header__trigger--nojs");
    nav.classList.remove("page-header__list--nojs");

    toggle__nav.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.toggle("page-header__list--open");
      toggle__nav.classList.toggle("page-header__trigger--close");
  });


var toggle = document.querySelector(".main-nav__toggle");
  var open = document.querySelector(".dropdown-menu__button--open");
  var close = document.querySelector(".index-page");

  toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    open.classList.toggle("dropdown-menu__button--close1");
    close.classList.toggle("dropdown-menu__button--open1");
  });

  var currentTime = new Date().getHours();
  var theme = document.querySelector(".index-page");
  function timeCheck() {
      if (currentTime > 18 || currentTime < 6) {
        theme.classList.add('dark');
      }
  };

  timeCheck();
