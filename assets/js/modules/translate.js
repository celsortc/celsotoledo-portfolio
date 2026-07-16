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

  function setInitialLanguage() {
    //define lingua padrão como pt, caso não tenha nada no localStorage, se tiver, pega a lingua salva no localStorage
    const nativeLang = "pt";
    const firstLang =
      localStorage.getItem("lang") != null
        ? localStorage.getItem("lang")
        : nativeLang;

    //verifica se a primeira lingua é pt ou en, se for pt, o botão de troca de lingua deve mostrar EN, se for en, deve mostrar PT, altera dataset também
    if (firstLang === "en") {
      document.querySelector(".btn-language").textContent = "PT";
      document.querySelector(".btn-language").dataset.lang = "en";
    }

    //define a primeira lingua do site com base no ternário lá em cima
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (translations[firstLang][key]) {
        element.textContent = translations[firstLang][key];
      }
    });
  }

  setInitialLanguage();

  function verifySavedLanguage(currentLanguage) {
    if (localStorage.getItem("lang") !== null) {
      return localStorage.getItem("lang") === "pt" ? "en" : "pt";
    } else {
      return currentLanguage === "pt" ? "en" : "pt";
    }
  }

  const translateBtn = document.querySelector(".btn-language");

  translateBtn.addEventListener("click", () => {
    const currentLang = translateBtn.dataset.lang; //pt

    const newLang = verifySavedLanguage(currentLang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (translations[newLang][key]) {
        element.textContent = translations[newLang][key];
      }
    });
    translateBtn.textContent = newLang === "pt" ? "EN" : "PT";
    translateBtn.dataset.lang = newLang;

    localStorage.setItem("lang", newLang);
  });
}
