export default function scrollSuave() {
  const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(section);
  }
}
