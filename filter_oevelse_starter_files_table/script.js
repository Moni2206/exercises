// Knapper
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", klik);
});

function klik(evt) {
  const filter = evt.target.dataset.filter;
  visHvilketFilterDerErValgt(filter);
  filterVehicles(filter);
}

function visHvilketFilterDerErValgt(filter) {
  document.querySelector("h2").textContent = "Filter: " + filter;
}

// Data
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// Tabel
const tbodyPointer = document.querySelector("tbody");

// Vis alle fra start
showTheseVehicles(vehicles);

// Filtrering
function filterVehicles(filter) {
  let filtered = [];

  if (filter === "all") {
    filtered = vehicles;
  }

  if (filter === "electric") {
    filtered = vehicles.filter((v) => v.isElectric === true);
  }

  if (filter === "manySeats") {
    filtered = vehicles.filter((v) => v.passengers > 2);
  }

  if (filter === "jonasElectric") {
    filtered = vehicles.filter((v) => v.isElectric && v.ownedBy === "Jonas");
  }

  if (filter === "rugbrod") {
    filtered = vehicles.filter((v) => v.fuel === "Rugbrød" && v.passengers > 1);
  }

  showTheseVehicles(filtered);
}

// Vis i tabel (uden undefined/true)
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type ?? ""}</td>
      <td>${each.fuel ?? ""}</td>
      <td>${each.passengers ?? ""}</td> 
      <td>${each.stops ? each.stops.join(", ") : ""}</td>
      <td>${each.ownedBy ?? ""}</td>
      <td>${each.isElectric ? "Ja" : ""}</td>
      <td>${each.isTandem ? "Ja" : ""}</td>
    </tr>`;
  });
}
