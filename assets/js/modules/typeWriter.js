export default function initTypingEffect() {
  const areas = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-stack Developer",
  ];

  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  const typingElement = document.getElementById("typing");

  function typeEffect() {
    const currentWord = areas[wordIndex];

    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, letterIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentWord.length) {
      speed = 1500; // pausa antes de apagar
      isDeleting = true;
    }

    // terminou de apagar
    else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % areas.length;
      speed = 500; // pausa antes de escrever próxima
    }

    setTimeout(typeEffect, speed); // velocidade de digitação
  }

  typeEffect();
}
