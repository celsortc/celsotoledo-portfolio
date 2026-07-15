export default function initTranslate() {
  const translations = {
    en: {
      "nav-about": "About",
      "nav-skills": "Skills",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
    },
    pt: {
      "nav-about": "Sobre",
      "nav-skills": "Habilidades",
      "nav-projects": "Projetos",
      "nav-contact": "Contato",
    },
  };

  const translateBtn = document.querySelector(".btn-language");

  translateBtn.addEventListener("click", () => {
    const currentLang = translateBtn.dataset.lang;
    const newLang = currentLang === "en" ? "pt" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (translations[newLang][key]) {
        element.textContent = translations[newLang][key];
      }
    });
    translateBtn.textContent = newLang === "en" ? "PT" : "EN";
    translateBtn.dataset.lang = newLang;
  });
}
