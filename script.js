//Hamburger Navbar
const toggle = document.querySelector(".nav-toggle");
const navbar_nav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#open-btn");
const close_btn = document.querySelector("#close-btn");

const navbarToggle = () => navbar_nav.classList.toggle("active");
hamburger.addEventListener("click", navbarToggle);
close_btn.addEventListener("click", navbarToggle);

//Sticky Navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//Smooth Scrolling
const links = document.querySelectorAll(".nav-link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
  link.addEventListener("click", navbarToggle);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 300;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
