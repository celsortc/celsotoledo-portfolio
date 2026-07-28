export default function initNavbarMobile() {
  const menuHamburger = document.getElementById("hamburgerbtn");
  const navOverlay = document.querySelector(".nav-overlay");

  function toggleMenu() {
    const isOpen = menuHamburger.classList.toggle("is-open");

    console.log(isOpen);

    navOverlay.classList.toggle("is-open", isOpen);
  }

  menuHamburger.addEventListener("click", toggleMenu);
}
