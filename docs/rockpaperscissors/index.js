"use strict";
/*her finder jeg alle elementerne i HTML*/
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

/* her henter knapperne.*/
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const buttons = document.querySelector("#buttons");

/*vinder vise */
const winMsg = document.querySelector("#win");
const loseMsg = document.querySelector("#lose");
const drawMsg = document.querySelector("#draw");

let userChoice;
let computerResult;

// variabler til at gemme valg
document.addEventListener("DOMContentLoaded", init);

// venter på at DOM er loaded, før init køres
function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}

function rockClick() {
  userChoice = "rock";
  playGame();
}

function paperClick() {
  userChoice = "paper";
  playGame();
}

function scissorsClick() {
  userChoice = "scissors";
  playGame();
}
// funktioner til hver knap, der sætter userChoice og kalder playGame
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playGame() {
  //   Deaktiver knapperne under animationen
  buttons.classList.add("disabled");
  rock_btn.disabled = true;
  paper_btn.disabled = true;
  scissors_btn.disabled = true;

  computerResult = getComputerChoice();

  player1.classList.add("shake");
  player2.classList.add("shake");

  winMsg.classList.add("hidden");
  loseMsg.classList.add("hidden");
  drawMsg.classList.add("hidden");

  setTimeout(() => {
    player1.classList.add(userChoice);
    player2.classList.add(computerResult);
    player1.className = "player " + userChoice;
    player2.className = "player " + computerResult;

    if (userChoice === computerResult) {
      showResult("draw");
    } else if ((userChoice === "rock" && computerResult === "scissors") || (userChoice === "paper" && computerResult === "rock") || (userChoice === "scissors" && computerResult === "paper")) {
      showResult("win");
    } else {
      showResult("lose");
    }

    /*Fjern shake animation og reset*/
    setTimeout(() => {
      player1.classList.remove("shake");
      player1.classList.remove(userChoice);
      player2.classList.remove("shake");
      player2.classList.remove(computerResult);
      player1.textContent = "";
      player2.textContent = "";

      //   Aktiver knapperne igen
      buttons.classList.remove("disabled");
      rock_btn.disabled = false;
      paper_btn.disabled = false;
      scissors_btn.disabled = false;
    }, 2000);
  }, 1800);
}
// Vis resultatet
function showResult(result) {
  if (result === "win") {
    winMsg.classList.remove("hidden");
  } else if (result === "lose") {
    loseMsg.classList.remove("hidden");
  } else if (result === "draw") {
    drawMsg.classList.remove("hidden");
  }
}
