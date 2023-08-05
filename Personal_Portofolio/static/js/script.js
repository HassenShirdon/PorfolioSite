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

AOS.init();
