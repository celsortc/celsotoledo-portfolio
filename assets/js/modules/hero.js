import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
import initNav from "./nav.js";

export default function initHero() {
  async function playHeroThenNav() {
    const heroText = animate(
      ".hero-text",
      { opacity: 1, x: 0 },
      { duration: 0.6 },
    );
    const heroPhoto = animate(
      ".img-container",
      { opacity: 1, x: 0 },
      { duration: 0.6 },
    );

    // espera as duas animações terminarem
    await Promise.all([heroText.finished, heroPhoto.finished]);

    initNav();
  }

  playHeroThenNav();
}
