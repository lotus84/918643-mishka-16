var navMain = document.querySelectorAll(".main-nav__wrap");
var navToggle = document.querySelector(".main-nav__toggle");
var itemWeekBuy = document.querySelector(".product-main__checkout");
var itemPopup = document.querySelector(".modal-item");
var itemBuy = document.querySelectorAll(".catalog__button-buy");

console.log(itemBuy);

for (var i = 0; i < navMain.length; i++) {
  navMain[i].classList.remove("main-nav__wrap--nojs");
};

navToggle.addEventListener("click", function() {
  for (var i = 0; i < navMain.length; i++) {
    if (navMain[i].classList.contains("main-nav__wrap--closed")) {
      navMain[i].classList.remove("main-nav__wrap--closed");
      navMain[i].classList.add("main-nav__wrap--opened");
    } else {
      navMain[i].classList.add("main-nav__wrap--closed");
      navMain[i].classList.remove("main-nav__wrap--opened");
    }
  };
});

for (var j = 0; j < itemBuy.length; j++) {
  itemBuy[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    itemPopup.classList.add("modal-show");
  });
};


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (itemPopup.classList.contains("modal-show")) {
      itemPopup.classList.remove("modal-show");
    }
  }
});

itemWeekBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemPopup.classList.add("modal-show");
});
