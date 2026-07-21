import {
  animate,
  scroll,
  inView,
  hover,
  press,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

import initNavbarScroll from "./modules/navbarScroll.js";
import initHero from "./modules/hero.js";
import initAnimations from "./modules/animations.js";
import initAbout from "./modules/about.js";
import initSkills from "./modules/skills.js";
import initProject from "./modules/project.js";
import initContact from "./modules/contact.js";
import initFooter from "./modules/footer.js";
import initTypingEffect from "./modules/typeWriter.js";

// Importei o dicionário
import initTranslate, { translations } from "./modules/translate.js";
import initThemeBtn from "./modules/themeButton.js";
// import initHeroCanvas from "./modules/hero-canvas.js";

initNavbarScroll();
initHero();
initAnimations();
initAbout();
initSkills();
initProject();
initContact();
initFooter();
initTypingEffect(translations.pt.typewriter);
initTranslate();
initThemeBtn();

// initHeroCanvas();
