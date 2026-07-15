import {
  animate,
  inView,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initAnimations() {
  // h2 animation

  inView(".title-block h2", (element) => {
    animate(element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
  });
}
