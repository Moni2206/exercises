const name = "Peter Heronimous Lind";

const firstSpaceIndex = name.indexOf(" ");
const lastSpaceIndex = name.lastIndexOf(" ");

let firstName;
let middleName;
let lastName;

if (firstSpaceIndex === -1) {
  firstName = name;
  middleName = "";
  lastName = "";
} else if (firstSpaceIndex === lastSpaceIndex) {
  firstName = name.substring(0, firstSpaceIndex);
  middleName = "";
  lastName = name.substring(firstSpaceIndex + 1);
} else {
  firstName = name.substring(0, firstSpaceIndex);
  middleName = name.substring(firstSpaceIndex + 1, lastSpaceIndex);
  lastName = name.substring(lastSpaceIndex + 1);
}

console.log("First name:", firstName);
console.log("Middle name:", middleName);
console.log("Last name:", lastName);
