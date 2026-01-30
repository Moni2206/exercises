"use strict";

fullPrice(200, 33);

function fullPrice(price, moms = 25) {
  console.log("Fulle price", (price * moms) / 100 + price);

  //   console.log("price", price);
  //   console.log("moms", moms);
  //   console.log("fullprice", (price * moms) / price + 100);
}

// terminal
// for at ser det i terminal : node --wacht js.js

// "use strict";

// const moms = 0.25;
// let pris = 100;

// console.log("show moms", (pris * (1 + moms)) / 100 + "%");

// function beregnMoms() {
//   const moms = 0.25;
//   const prisUdenMoms = 100;
// }
