// data
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
// * Find knappen
// * Find stedet hvor breadcrumbs skal vises
const button = document.querySelector(".btn");
const breadcrumb = document.querySelector("#breadcrumb");

// Funktion der genererer breadcrumbs
// Tager noget data og laver breadcrumbs ud fra det
function generateBreadcrumbs(data) {
  let htmlStr = "";

  data.forEach((item, index) => {
    // Hvis det er sidste element -> kun tekst (ikke link)
    if (index === data.length - 1) {
      htmlStr += `<li>${item.name}</li>`;
    } else {
      htmlStr += `
        <li>
          <a href="${item.link}">${item.name}</a>
        </li>
      `;
    }
  });

  breadcrumb.innerHTML = htmlStr;
}

// Event listener på knappenHer sker noget vigtigt:

// Der sker intet før der klikkes

// * Når der klikkes → funktionen generateBreadcrumbs kører

// * Vi sender vores data (bc) med ind i funktionen
button.addEventListener("click", () => {
  generateBreadcrumbs(bc);
});
