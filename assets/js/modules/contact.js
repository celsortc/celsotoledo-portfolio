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

  handleFormSubmit();
  hideViewMore();
}

function handleFormSubmit() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
  const btnSend = document.querySelector(".btn-send");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    //Pega os dados dos campos
    const formData = new FormData(form);
    //cria um objeto com os dados
    const object = Object.fromEntries(formData);
    //cria um json com base nesses dados
    const json = JSON.stringify(object);

    btnSend.disabled = true;
    status.textContent = "Enviando...";
    status.className = "form-status";

    console.log(json);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        status.textContent = "Mensagem enviada com sucesso!";
        status.classList.add("success");
        form.reset();
      } else {
        status.textContent = "Algo deu errado. Tente novamente.";
        status.classList.add("error");
      }
      console.log(response, result);
    } catch (error) {
      status.textContent = "Erro de conexão. Tente novamente.";
      status.classList.add("error");
    } finally {
      btnSend.disabled = false;
    }
  });
}

function hideViewMore() {
  const projects = document.querySelectorAll(".project-card");
  const viewMoreButton = document.querySelector(".btn-view-more");

  if (projects.length > 6) {
    viewMoreButton.classList.add("show");
  }
}
