import {
  animate,
  delay,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
import initNav from "./nav.js";

export default function initHero() {
  async function playHeroThenNav() {
    // const heroText = document.querySelector(".hero-text");

    const heroText = animate(
      document.querySelector(".hero-text"),
      { opacity: [0, 1], x: [-50, 0] },
      { duration: 0.6, easing: "ease-out" },
    );
    const heroPhoto = animate(
      document.querySelector(".img-container"),
      { opacity: [0, 1], x: [50, 0] },
      { duration: 0.6, easing: "ease-out" },
    );
    const heroGreeting = Motion.animate(
      document.querySelector(".hero-greeting"),
      { opacity: [0, 1] },
      { duration: 0.4, delay: 0.2, easing: "ease-out" },
    );

    // espera as duas animações terminarem
    await Promise.all([
      heroText.finished,
      heroPhoto.finished,
      heroGreeting.finished,
    ]);

    initNav();
  }

  playHeroThenNav();

  // Contact button hover animation
  function btnContactHover() {
    const btnContact = document.querySelector(".btn-contact-me");

    btnContact.addEventListener("mouseenter", () => {
      Motion.animate(btnContact, { scale: 1.05 }, { duration: 0.15 });
    });
    btnContact.addEventListener("mouseleave", () => {
      Motion.animate(btnContact, { scale: 1 }, { duration: 0.15 });
    });
    btnContact.addEventListener("mousedown", () => {
      Motion.animate(btnContact, { scale: 0.95 }, { duration: 0.1 });
    });
    btnContact.addEventListener("mouseup", () => {
      Motion.animate(btnContact, { scale: 1 }, { duration: 0.1 });
    });
  }

  btnContactHover();

  // Social icons hover animation

  function hoverSocialIcon() {
    document.querySelectorAll(".btn-social-icon").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        Motion.animate(btn, { scale: 1.1 }, { duration: 0.15 });
      });
      btn.addEventListener("mouseleave", () => {
        Motion.animate(btn, { scale: 1 }, { duration: 0.15 });
      });
      btn.addEventListener("mousedown", () => {
        Motion.animate(btn, { scale: 0.9 }, { duration: 0.1 });
      });
      btn.addEventListener("mouseup", () => {
        Motion.animate(btn, { scale: 1.1 }, { duration: 0.1 });
      });
    });
  }

  hoverSocialIcon();
}
