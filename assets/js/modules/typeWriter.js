let areas = [];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

let typingElement = null;

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
  } else if (isDeleting && letterIndex === 0) {
    // terminou de apagar
    isDeleting = false;
    wordIndex = (wordIndex + 1) % areas.length;
    speed = 500; // pausa antes de escrever próxima
  }

  setTimeout(typeEffect, speed); // velocidade de digitação
}

//função que só inicia o efeito
export default function initTypingEffect(words) {
  areas = words;
  typingElement = document.getElementById("typing");
  typeEffect();
}

//Atualiza as palavras do efeito de digitação com base na língua selecionada
export function updateTypewriterWords(newWords) {
  typingElement.textContent = "";
  areas = newWords;
  wordIndex = 0;
  letterIndex = 0;
  isDeleting = false;
}
