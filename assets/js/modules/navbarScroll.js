export default function initNavbarScroll() {
  const header = document.querySelector(".nav-desktop");

  console.log(header);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
