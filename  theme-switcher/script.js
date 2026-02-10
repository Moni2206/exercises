const select = document.getElementById("lan-select");

select.addEventListener("change", function () {
  document.body.setAttribute("data-theme", this.value);
});
