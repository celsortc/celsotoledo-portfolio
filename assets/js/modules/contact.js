import {
  animate,
  inView,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initContact() {
  // form entra da esquerda
  Motion.inView(".contact-form", () => {
    Motion.animate(
      ".contact-form",
      { opacity: [0, 1], x: [-30, 0] },
      { duration: 0.6, easing: "ease-out" },
    );
  });

  // contact methods entram da direita
  Motion.inView(".contact-right", () => {
    Motion.animate(
      ".contact-right",
      { opacity: [0, 1], x: [30, 0] },
      { duration: 0.6, delay: 0.2, easing: "ease-out" },
    );
  });

  //hover method cards
  document.querySelectorAll(".contact-method-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      Motion.animate(card, { x: 10 }, { duration: 0.2, easing: "ease-out" });
    });
    card.addEventListener("mouseleave", () => {
      Motion.animate(card, { x: 0 }, { duration: 0.2, easing: "ease-out" });
    });
  });

  // btns
  const btnSend = document.querySelector(".btn-send");

  btnSend.addEventListener("mouseenter", () => {
    Motion.animate(btnSend, { scale: 1.02 }, { duration: 0.15 });
  });
  btnSend.addEventListener("mouseleave", () => {
    Motion.animate(btnSend, { scale: 1 }, { duration: 0.15 });
  });
  btnSend.addEventListener("mousedown", () => {
    Motion.animate(btnSend, { scale: 0.98 }, { duration: 0.1 });
  });
  btnSend.addEventListener("mouseup", () => {
    Motion.animate(btnSend, { scale: 1 }, { duration: 0.1 });
  });
}
