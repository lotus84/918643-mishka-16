var navMain = document.querySelectorAll(".main-nav__wrap");
var navToggle = document.querySelector(".main-nav__toggle");
var itemWeekBuy = document.querySelector(".product-main__button");
var itemPopup = document.querySelector(".modal-item");
var itemBuy = document.querySelectorAll(".catalog__button-buy");

for (var i = 0; i < navMain.length; i++) {
  navMain[i].classList.remove("main-nav__wrap--nojs");
  navMain[i].classList.remove("main-nav__wrap--opened");
  navMain[i].classList.add("main-nav__wrap--closed");
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
    itemPopup.classList.add("modal__show");
  });
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (itemPopup.classList.contains("modal__show")) {
      itemPopup.classList.remove("modal__show");
    }
  }
});

if (itemWeekBuy) {
  itemWeekBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemPopup.classList.add("modal__show");
  });
}


// Оживление слайдера на главной странице


var slides = document.getElementsByClassName("slider__item-wrap");


if (slides.length) {
  var slideIndex = 1;
  showSlides(slideIndex);


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item-wrap");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
}
