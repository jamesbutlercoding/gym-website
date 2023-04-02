const hamburgerBtn = document.querySelector(".toggle-button");
const toggleNav = document.querySelector(".nav-toggle-nav");

hamburgerBtn.addEventListener("click", function () {
  console.log("click");
  if (!toggleNav.classList.contains("active")) {
    toggleNav.classList.add("active");
    console.log("second stage");
    return;
  }
  toggleNav.classList.remove("active");
});

// Add a click event listener to the toggle button
hamburgerBtn.addEventListener("click", function () {
  // Toggle the 'open' class on the toggle button element
  hamburgerBtn.classList.toggle("open");
});
