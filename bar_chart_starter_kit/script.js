const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

const columnArray = [];

setInterval(generateColums, 1000);

function generateColums() {
  columnArray.push(Math.round(Math.random() * 100) + 1);
  const li = document.createElement("li");
  if (columnArray.length > 20) {
    columnArray.shift();
  }
  li.style.setProperty("--height", columnArray[columnArray.length - 1]);
  list.appendChild(li);

  //   console.log("columnArray", columnArray);
}

// function generateColums() {
//   columnArray.push(Math.round(Math.random() * 100));
//   //   console.log("columnArray", columnArray);
//   //   const li = document.createElement("li");
//   if (columnArray.length > 5) {
//     columnArray.shift();
//   }
//   //   li.style.setProperty("--height", columnArray[columnArray.length - 1]);
//   //   list.appendChild(li);
// }

// Math.random();for (let i = 0; i < 10; i++) {
