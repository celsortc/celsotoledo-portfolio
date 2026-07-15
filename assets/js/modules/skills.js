import {
  animate,
  inView,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initSkills() {
  // skill card
  document.querySelectorAll(".skill-card").forEach((card, index) => {
    inView(card, (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.4, delay: index * 0.05, easing: "ease-out" },
      );
    });
  });

  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      Motion.animate(card, { y: -8, scale: 1.05 }, { duration: 0.2 });
    });
    card.addEventListener("mouseleave", () => {
      Motion.animate(card, { y: 0, scale: 1 }, { duration: 0.2 });
    });
  });
}
