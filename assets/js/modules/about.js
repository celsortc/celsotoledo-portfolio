import {
  animate,
  inView,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initAbout() {
  // 2. Feature cards (staggered entre eles)
  document.querySelectorAll(".about-item").forEach((card, index) => {
    inView(card, (element) => {
      animate(
        element,
        { opacity: [0, 1], x: [30, 0] },
        { duration: 0.4, delay: index * 0.1, easing: "ease-out" },
      );
    });
  });

  // 3. Texto
  inView(
    ".about-text",
    (element) => {
      animate(
        element,
        { opacity: [0, 1], x: [-30, 0] },
        { duration: 0.6, easing: "ease-out" },
      );
    },
    { amount: 0.1 },
  );

  // hover

  hover(".about-item", (element) => {
    animate(element, { x: 10 }, { duration: 0.2 });
    return () => animate(element, { x: 0 }, { duration: 0.2 });
  });
}
