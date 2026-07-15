import {
  animate,
  inView,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initFooter() {
  Motion.inView(".footer-copyright", () => {
    Motion.animate(
      ".footer-copyright",
      { opacity: [0, 1] },
      { duration: 0.5, easing: "ease-out" },
    );
  });

  Motion.inView(".footer-socials", () => {
    Motion.animate(
      ".footer-socials",
      { opacity: [0, 1] },
      { duration: 0.5, easing: "ease-out" },
    );
  });

  //footer btns
  document.querySelectorAll(".btn-social-footer").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      Motion.animate(btn, { scale: 1.1, y: -2 }, { duration: 0.15 });
    });
    btn.addEventListener("mouseleave", () => {
      Motion.animate(btn, { scale: 1, y: 0 }, { duration: 0.15 });
    });
    btn.addEventListener("mousedown", () => {
      Motion.animate(btn, { scale: 0.9 }, { duration: 0.1 });
    });
    btn.addEventListener("mouseup", () => {
      Motion.animate(btn, { scale: 1 }, { duration: 0.1 });
    });
  });
}
