import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

export default function initNav() {
  animate(".nav-pill", { opacity: 1, y: 0 }, { duration: 0 });
}
