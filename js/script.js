// Toggle Hamburger
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  const search = document.querySelector("#search-button");
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Remove Toggle Class Jika Di Klik Di Luar Element
const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Add Border To Navbar If Mouse Scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").classList.add("navbar-scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("navbar-scrolled");
  }
}
