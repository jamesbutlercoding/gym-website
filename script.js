"use strict";

const hamburgerBtn = document.querySelector(".nav-toggle-button");
const toggleNav = document.querySelector(".nav-toggle-nav");

// Hamburger nav functionality

hamburgerBtn.addEventListener("click", function () {
  if (!toggleNav.classList.contains("nav-toggle-active")) {
    toggleNav.classList.add("nav-toggle-active");
    return;
  }
  toggleNav.classList.remove("nav-toggle-active");
});

// Add a click event listener to the toggle button
hamburgerBtn.addEventListener("click", function () {
  // Toggle the 'open' class on the toggle button element
  hamburgerBtn.classList.toggle("open");
});

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
