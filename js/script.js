// Toggle Hamburger
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
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

// Smooth scroll
// Ambil semua elemen link menuju section
const navLinks = document.querySelectorAll('a[href^="#"]');

// Loop setiap link dan tambahkan event listener
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Hilangkan default behavior dari link
    e.preventDefault();

    // Ambil target section berdasarkan href dari link
    const targetSection = document.querySelector(link.getAttribute("href"));

    // Lakukan scroll dengan animasi ke section yang dituju
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
