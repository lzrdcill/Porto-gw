// script.js
AOS.init();

const teks = [
  "Jasa Digital Terbaik",
  "Joki Tugas & Game",
  "Desain & Editing",
  "Prompt AI",
  "Voice Over"
];

let i = 0, j = 0, isDeleting = false;
const speed = 120;
const el = document.getElementById("typing");

function typeEffect() {
  const current = teks[i];
  el.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % teks.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();
