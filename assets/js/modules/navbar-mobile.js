export default function initNavbarMobile() {
  const menuHamburger = document.getElementById("hamburgerbtn");
  const navOverlay = document.querySelector(".nav-overlay");

  function toggleMenu() {
    const isOpen = menuHamburger.classList.toggle("is-open");

    navOverlay.classList.toggle("is-open", isOpen);

    menuHamburger.setAttribute("aria-expanded", isOpen);

    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  const navOverlayLinks = document.querySelectorAll(".nav-overlay-links a");

  navOverlayLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") toggleMenu();
  });

  menuHamburger.addEventListener("click", toggleMenu);
}
