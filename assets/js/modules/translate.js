import { updateTypewriterWords } from "./typeWriter.js";

export const translations = {
  en: {
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-greeting": "Hello, I'm",
    "hero-description":
      "I build modern web applications with clean code and great user experiences.",
    "hero-contact-me": "Contact Me",
    "about-title": "About Me",
    "about-description":
      "I'm a Fullstack Developer focused on building modern web applications with clean code, intuitive user experiences, and scalable solutions. I'm constantly learning and improving my skills to create better digital products.",
    "about-clean-code": "Clean Code",
    "about-clean-code-description":
      "Maintainable, scalable, and easy-to-read code",
    "about-scalable-architecture": "Scalable Architecture",
    "about-scalable-architecture-description":
      "Building applications with a solid and organized structure",
    "about-user-experience": "User Experience",
    "about-user-experience-description":
      "Creating intuitive, responsive, and accessible interfaces",
    "skills-title": "Skills & Tech Stack",
    "skill-prompt-engineering": "Prompt Engineering",
    "projects-title": "Featured Projects",
    "project-description-1":
      "A modern task management application featuring task organization, real-time toast notifications, and robust error handling for a smooth user experience",
    "live-demo-button": "Live Demo",
    "project-title-2": "Web Calculator",
    "project-description-2":
      "Inspired by the Windows Calculator, this web application recreates its core experience with a modern design and a simplified feature set",
    "project-description-3":
      "A responsive web stopwatch with precise timing controls, keyboard shortcuts, and a clean, intuitive interface",
    "project-description-4":
      "A Python application developed using Prompt Engineering techniques to scan PDF files and automatically populate spreadsheets",
    "view-more-button": "View More Projects",
    "contact-title": "Get In Touch",
    "contact-label-name": "Name",
    "name-input": "John Doe",
    "email-input": "john@example.com",
    "message-input": "Your message...",
    "contact-label-email": "Email",
    "contact-label-message": "Message",
    "contact-send-button": "Send",
    "card-email-h3": "Email",
    "contact-availability-title": "Open to Opportunities",
    "contact-availability-description":
      "I'm currently open to new opportunities and collaborations. Feel free to reach out!",
    "footer-copyright": "© All Rights Reserved - Celso Toledo",
    typewriter: [
      "Front-end Developer",
      "Back-end Developer",
      "Full-stack Developer",
    ],
  },
  pt: {
    "nav-about": "Sobre",
    "nav-skills": "Habilidades",
    "nav-projects": "Projetos",
    "nav-contact": "Contato",
    "hero-greeting": "Olá, eu sou",
    "hero-description":
      "Construo aplicações modernas, combinando código limpo, arquitetura sólida e interfaces intuitivas.",
    "hero-contact-me": "Entrar em Contato",
    "about-title": "Sobre Mim",
    "about-description":
      "Sou um Desenvolvedor Full Stack focado em criar aplicações modernas com código limpo, experiências de usuário intuitivas e soluções escaláveis. Estou em constante aprendizado e aprimorando minhas habilidades para desenvolver produtos digitais cada vez melhores.",
    "about-clean-code": "Código Limpo",
    "about-clean-code-description":
      "Código organizado, escalável e de fácil manutenção",
    "about-scalable-architecture": "Arquitetura Escalável",
    "about-scalable-architecture-description":
      "Desenvolvendo aplicações com uma estrutura sólida e bem organizada",
    "about-user-experience": "Experiência do Usuário",
    "about-user-experience-description":
      "Criando interfaces intuitivas, responsivas e acessíveis",
    "skills-title": "Tecnologias & Ferramentas",
    "skill-prompt-engineering": "Engenharia de Prompt",
    "projects-title": "Projetos em Destaque",
    "project-title-1": "Lista de Tarefas",
    "project-description-1":
      "Uma aplicação moderna de gerenciamento de tarefas com organização eficiente, notificações em tempo real e tratamento de erros para proporcionar uma experiência fluida ao usuário",
    "live-demo-button": "Ver Projeto",
    "project-title-2": "Calculadora Web",
    "project-description-2":
      "Inspirada na Calculadora do Windows, esta aplicação web recria sua experiência principal com um design moderno e um conjunto de recursos simplificado",
    "project-description-3":
      "Um cronômetro web responsivo com controle preciso do tempo, atalhos de teclado e uma interface limpa e intuitiva",
    "project-title-4": "SDI v3",
    "project-description-4":
      "Uma aplicação em Python desenvolvida com técnicas de Engenharia de Prompt para escanear arquivos PDF e preencher planilhas automaticamente",
    "view-more-button": "Ver Mais Projetos",
    "contact-title": "Entre em Contato",
    "contact-label-name": "Nome",
    "name-input": "João da Silva",
    "contact-label-email": "E-mail",
    "email-input": "joao@exemplo.com",
    "contact-label-message": "Mensagem",
    "message-input": "Sua mensagem...",
    "contact-send-button": "Enviar",
    "card-email-h3": "E-mail",
    "contact-availability-title": "Aberto a Oportunidades",
    "contact-availability-description":
      "Atualmente estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!",
    "footer-copyright": "© Todos os Direitos Reservados - Celso Toledo",
    typewriter: [
      "Desenvolvedor Front-end",
      "Desenvolvedor Back-end",
      "Desenvolvedor Full-stack",
    ],
  },
};

export default function initTranslate() {
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

    updateTypewriterWords(translations[firstLang].typewriter);

    //define a primeira lingua do site com base no ternário lá em cima
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (translations[firstLang][key]) {
        element.textContent = translations[firstLang][key];
      }
    });

    // Placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder =
        translations[firstLang][element.dataset.i18nPlaceholder];
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
    updateTypewriterWords(translations[newLang].typewriter);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (translations[newLang][key]) {
        element.textContent = translations[newLang][key];
      }
    });

    // Placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder =
        translations[newLang][element.dataset.i18nPlaceholder];
    });

    translateBtn.textContent = newLang === "pt" ? "EN" : "PT";
    translateBtn.dataset.lang = newLang;

    localStorage.setItem("lang", newLang);
  });
}
