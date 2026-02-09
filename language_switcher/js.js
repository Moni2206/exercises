document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#lan-select").addEventListener("change", selectChange);

  changeLanguage("de");
});

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

function selectChange(evt) {
  changeLanguage(evt.target.value);
}

function changeLanguage(locale) {
  texts[locale].texts.forEach((elm) => {
    document.querySelector(elm.location).textContent = elm.text;
  });
}

// // Function to apply texts based on selected locale
// function applyTexts(locale) {
//   if (!texts[locale]) return;

//   texts[locale].texts.forEach((item) => {
//     const element = document.querySelector(item.location);
//     if (element) element.textContent = item.text;
//   });
// }

// // Set up event listener for dropdown
// const dropdown = document.querySelector(".dropdown-select");
// dropdown.addEventListener("change", (event) => {
//   const selectedLocale = event.target.value;
//   applyTexts(selectedLocale);
// });

// document.querySelector("dropdown");
// function dropdown() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// // Function to apply texts based on selected locale
// function applyTexts(locale) {
//   if (!texts[locale]) return;

//   texts[locale].texts.forEach((item) => {
//     const element = document.querySelector(item.location);
//     if (element) element.textContent = item.text;
//   });
// }

// // Set up event listener for dropdown
// const dropdown = document.querySelector(".dropdown-select");
// dropdown.addEventListener("change", (event) => {
//   const selectedLocale = event.target.value;
//   applyTexts(selectedLocale);
// });
