// Det tal der skal gættes
const tal = 8;

const inputfield = document.getElementById("tal");
const guessbtn = document.getElementById("guess");
const output = document.getElementById("output");

guessbtn.addEventListener("click", guessNumber);

// console.log("Computer har valgt:", tal);

function guessNumber() {
  const brugerGæt = Number(inputfield.value);

  //   console.log("inputfield.value type:", typeof inputfield.value);
  //   console.log("Computer gæt:", tal);

  if (brugerGæt === tal) {
    output.textContent = "🎉 Tillykke! Du gættede rigtigt! 🎉";
    document.body.classList.add("celebrate");
  } else if (brugerGæt > tal) {
    output.textContent = "For højt! Prøv igen.";
    document.body.classList.add("too-high");
  } else {
    output.textContent = "For lavt! Prøv igen.";
    document.body.classList.add("too-high");
  }
}

// const tal = Math.floor(Math.random() * 88);
// console.log(tal);
