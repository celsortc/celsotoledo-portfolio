import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initNav() {
  const nav = document.querySelector(".nav-pill");

  Motion.animate(nav, { y: 0 }, { duration: 0.5, easing: "ease-out" });
}
