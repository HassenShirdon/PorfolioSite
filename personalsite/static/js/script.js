// Function to toggle mobile navigation menu
function toggleMobileNav() {
  var navList = document.querySelector("#header #navbar ul");
  navList.classList.toggle("show");
}

// Toggle mobile navigation when the toggle icon is clicked
document
  .querySelector(".mobile-nav-toggle")
  .addEventListener("click", toggleMobileNav);

// Close mobile navigation when a navigation link is clicked
var navLinks = document.querySelectorAll("#header #navbar ul li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    var navList = document.querySelector("#header #navbar ul");
    if (navList.classList.contains("show")) {
      navList.classList.remove("show");
    }
  });
}

// Smooth scrolling for anchor links
document
  .querySelector("#header #navbar ul")
  .addEventListener("click", function (e) {
    if (
      e.target.tagName.toLowerCase() === "a" &&
      e.target.getAttribute("href").startsWith("#")
    ) {
      e.preventDefault();

      const targetElement = document.querySelector(
        e.target.getAttribute("href")
      );
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // Close the mobile navigation menu (if present) after clicking the link
      const mobileNav = document.getElementById("navbar");
      mobileNav.classList.remove("show");
    }
  });

// preload

let preloader = select("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("header nav ul li a");

  function handleNavLinkClick(event) {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    event.target.classList.add("active");
  }

  function handleScroll() {
    const fromTop = window.scrollY;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop + 200 &&
        section.offsetTop + section.offsetHeight > fromTop + 200
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  navLinks.forEach((navLink) =>
    navLink.addEventListener("click", handleNavLinkClick)
  );
  window.addEventListener("scroll", handleScroll);
});

window.addEventListener("load", () => {
  const preloadLogo = document.getElementById("preload-logo");
  preloadLogo.style.display = "none";
});
