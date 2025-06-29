// script.js

// Efek Ketik Animasi
const teks = [
  "Jasa Digital Modern",
  "Prompt AI & Desain",
  "Joki Game & Tugas",
  "Voice Over & Editing"
];

let i = 0;
let j = 0;
let isDeleting = false;
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

// ==========================
// Hamburger Menu Toggle
// ==========================
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
