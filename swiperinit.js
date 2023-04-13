"use strict";

// Define a function to initialize the Swiper
function initSwiper() {
  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Call the initSwiper function when the page has finished loading
window.addEventListener("load", function () {
  initSwiper();
});
