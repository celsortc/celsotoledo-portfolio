export default function initThemeBtn() {
  const themeBtn = document.querySelector(".btn-theme");
  const html = document.documentElement;

  //Verifica se já tem tema salvo, ou usa preferência de sistema do usuário
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  html.setAttribute("data-theme", savedTheme);

  themeBtn.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}
