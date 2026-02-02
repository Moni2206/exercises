document.addEventListener("DOMContentLoaded", () => {
  const aEl = document.getElementById("tal1");
  const bEl = document.getElementById("tal2");
  const btn = document.getElementById("beregn");
  const out = document.getElementById("output");
  const regneart = document.getElementById("regneart");

  btn.addEventListener("click", () => {
    const a = parseFloat(aEl.value);
    const b = parseFloat(bEl.value);
    const operator = regneart.value;

    if (Number.isNaN(a) || Number.isNaN(b)) {
      out.textContent = "Indtast begge tal";
      return;
    }

    if (operator === "") {
      out.textContent = "Vælg en regneart";
      return;
    }

    let resultat;

    if (operator === "+") resultat = a + b;
    if (operator === "-") resultat = a - b;
    if (operator === "*") resultat = a * b;
    if (operator === "/") resultat = a / b;

    out.textContent = resultat;
  });
});
