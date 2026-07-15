import {
  animate,
  scroll,
  inView,
  hover,
  press,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

import initNavbarScroll from "./modules/navbarScroll.js";
import initHero from "./modules/hero.js";
// import initHeroCanvas from "./modules/hero-canvas.js";

initNavbarScroll();
initHero();
// initHeroCanvas();

inView(".title-block h2", (element) => {
  animate(element, { opacity: 1, y: 0 }, { duration: 0.6 });
});

// 2. Feature cards (staggered entre eles)
document.querySelectorAll(".about-item").forEach((card, index) => {
  inView(card, (element) => {
    animate(
      element,
      { opacity: 1, x: 0 },
      { duration: 0.4, delay: index * 0.1 },
    );
  });
});

// 3. Texto
inView(
  ".about-text",
  (element) => {
    animate(element, { opacity: 1, x: 0 }, { duration: 0.6 });
  },
  { amount: 0.1 },
);

// hover

hover(".about-item", (element) => {
  animate(element, { x: 10 }, { duration: 0.2 });
  return () => animate(element, { x: 0 }, { duration: 0.2 });
});

// skill card
document.querySelectorAll(".skill-card").forEach((card, index) => {
  inView(card, (element) => {
    animate(
      element,
      { opacity: 1, y: 0 },
      { duration: 0.4, delay: index * 0.1 },
    );
  });
});

document.querySelectorAll(".project-card").forEach((card, index) => {
  inView(card, (element) => {
    animate(
      element,
      { opacity: 1, y: 0 },
      { duration: 0.4, delay: index * 0.1 },
    );
  });
});
