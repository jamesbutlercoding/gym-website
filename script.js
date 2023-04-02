const hamburgerBtn = document.querySelector(".nav-toggle-button");
const toggleNav = document.querySelector(".nav-toggle-nav");

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
