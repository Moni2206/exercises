const guessbtn = document.getElementById("guessbtn");
const regneart = document.getElementById("regneart");
const result = document.getElementById("result");

let input = document.querySelector("input");

// let tal1 = document.querySelector("tal1").value;
// let tal2 = document.querySelector("tal2").value;
// console.log("JS file loaded");

function tal() {
  guessbtn.addEventListener("click", guessbtn);

  result.addEventListener("click", result);
  regneart.addEventListener("click", regneart);
}

// function guessbtn() {
//   tal1 = document.querySelector("input[name='tal1']").value;
//   tal2 = document.querySelector("input[name='tal2']").value;

//   console.log("Knappen er klikket");
//   console.log("Tal 1: " + tal1);
//   console.log("Tal 2: " + tal2);
//   console.log("Regneart: " + regneart.value);

//   let resultat = beregnResultat();
//   console.log("Resultat: " + resultat);
//   result.innerHTML = "Resultat: " + resultat;
// }
function beregnResultat() {
  if (regneart.value === "+") {
    return parseFloat(tal1) + parseFloat(tal2);
  } else if (regneart.value === "-") {
    return parseFloat(tal1) - parseFloat(tal2);
  } else if (regneart.value === "*") {
    return parseFloat(tal1) * parseFloat(tal2);
  } else if (regneart.value === "/") {
    return parseFloat(tal1) / parseFloat(tal2);
  }
}

// function calcRectArea(tal1, tal2) {
//   return tal1 + tal2;
//   return tal1 - tal2;
//   return tal1 * tal2;
//   return tal1 / tal2;
// }

// function regneart() {
//   console.log("Regneart valgt");
// }

// let tal = 0;
// function plus() {
//   tal = tal + 1;
//   console.log(tal);
// }
// function result() {
//   let result;
//   if (a > 0) {
//     result = "positive";
//   } else {
//     result = "NOT positive";
//   }
//   return result;
// }
function minus() {
  tal1 = tal1 - 1;
  console.log(tal1);
}

let mitTal = 0;
let plsu = "+";
let mineus = "-";
let gang = "*";
let dele = "/";

mitTal++;

mitTal += 10;
mitTal--;

console.log(mitTal);

mitTal -= 2;
console.log(mitTal);
mitTal *= 8;
console.log(mitTal);
mitTal /= 4;
console.log(mitTal);
