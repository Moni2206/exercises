import { getRandomNumber } from "../utils/util_lib.js";

function $(elName) {
  return document.querySelector(elName);
}

console.log("getRandomNumber", getRandomNumber(3));

document.querySelector(".mitPTag").innerHTML = "Module";
document.querySelector(".myListElement").innerHTML = "hej med jer";

// $$(".myListElement").forEach((elm, i) => {
//   elm.innerHTML = "hej med jer" + i;
// });
