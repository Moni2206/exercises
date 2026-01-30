"use strict";
/*her finder jeg alle elementerne i HTML*/
const high_btn = document.querySelector(".high");
const low_btn = document.querySelector(".low");
const correct_btn = document.querySelector(".correct");
const start_btn = document.querySelector(".start");
const oplysninger = document.querySelector("#oplysninger");

// Variable til at spore computerens gæt
let computerGuess;
let min = 1;
let max = 100;
let guessCount = 0;

document.addEventListener("DOMContentLoaded", init);
function init() {
  high_btn.addEventListener("click", highClick);
  low_btn.addEventListener("click", lowClick);
  correct_btn.addEventListener("click", correctClick);
  start_btn.addEventListener("click", startClick);
}

function startClick() {
  // Nulstil variablerne
  min = 1;
  max = 100;
  guessCount = 0;

  // Computerens første gæt
  computerGuess = Math.floor((min + max) / 2);
  guessCount++;

  oplysninger.textContent = `Jeg gætter: ${computerGuess}.   Er det for højt, for lavt eller rigtigt`;
  //   oplysninger2.textContent = ` Er det for højt, for lavt eller rigtigt?`;
}

function highClick() {
  oplysninger.textContent = `Jeg gætter: ${computerGuess}. Det er for højt`;
  // Dit svar var "for højt" - så det rigtige tal er mindre
  max = computerGuess - 1;
  makeNewGuess();
}

function lowClick() {
  // Dit svar var "for lavt" - så det rigtige tal er større
  //   oplysninger.textContent = `Jeg gætter: ${computerGuess}. Det er for lavt`;
  min = computerGuess + 1;
  makeNewGuess();
}

function correctClick() {
  oplysninger.textContent = `🎉 Jeg gættede rigtigt! Tallet var ${computerGuess} efter ${guessCount} gæt! 🎉`;
  //   console.log("Spilllet vundet efter", guessCount, "gæt");
}

function makeNewGuess() {
  if (min > max) {
    oplysninger.textContent = "Der er noget galt - dit interval giver ikke mening!";
    return;
  }
  //   buttons.classList.add("disabled");
  //   high_btn.disabled = true;
  //   low_btn.disabled = true;
  //   correct_btn.disabled = true;
  //   start_btn.disabled = false;

  //   //   Aktiver knapperne igen
  //   buttons.classList.remove("disabled");
  //   high_btn.disabled = false;
  //   low_btn.disabled = false;
  //   correct_btn.disabled = false;
  //   start_btn.disabled = true;

  computerGuess = Math.floor((min + max) / 2);
  guessCount++;

  oplysninger.textContent = `Jeg gætter: ${computerGuess} Er det for højt, for lavt eller rigtigt `;
  //   oplysninger2.textContent = ` Er det for højt, for lavt eller rigtigt?`;

  console.log("Nyt gæt:", computerGuess, "- Interval:", min, "til", max);
}
