import {
  animate,
  inView,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initProject() {
  document.querySelectorAll(".project-card").forEach((card, index) => {
    inView(card, (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.5, delay: index * 0.1, easing: "ease-out" },
      );
    });
  });

  // hover cards

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      Motion.animate(card, { y: -8 }, { duration: 0.2 });
    });
    card.addEventListener("mouseleave", () => {
      Motion.animate(card, { y: 0 }, { duration: 0.2 });
    });
  });

  // btns

  //livedemo
  document.querySelectorAll(".btn-live-demo").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      Motion.animate(btn, { scale: 1.05 }, { duration: 0.15 });
    });
    btn.addEventListener("mouseleave", () => {
      Motion.animate(btn, { scale: 1 }, { duration: 0.15 });
    });
    btn.addEventListener("mousedown", () => {
      Motion.animate(btn, { scale: 0.95 }, { duration: 0.1 });
    });
    btn.addEventListener("mouseup", () => {
      Motion.animate(btn, { scale: 1 }, { duration: 0.1 });
    });
  });

  //viewmore
  const btnViewMore = document.querySelector(".btn-view-more");
  btnViewMore.addEventListener("mouseenter", () => {
    Motion.animate(btnViewMore, { scale: 1.05 }, { duration: 0.15 });
  });
  btnViewMore.addEventListener("mouseleave", () => {
    Motion.animate(btnViewMore, { scale: 1 }, { duration: 0.15 });
  });

  //github

  const githubCard = document.querySelector(".btn-github-card");
  githubCard.addEventListener("mouseenter", () => {
    Motion.animate(githubCard, { scale: 1.05 }, { duration: 0.15 });
  });
  githubCard.addEventListener("mouseleave", () => {
    Motion.animate(githubCard, { scale: 1 }, { duration: 0.15 });
  });
}
