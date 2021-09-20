// !Write code that consoles fullname of students whose age is greater than equal to 24.
const arr = [
  { firstName: "Tirth", lastName: "shah", age: 23 },
  { firstName: "Abhishek", lastName: "pathak", age: 25 },
  { firstName: "Riya", lastName: "patel", age: 24 },
  { firstName: "Bhala", lastName: "batuk", age: 18 },
  { firstName: "Khalnayak", lastName: "Kalia", age: 24 },
];

// using filter method
const filtered = arr.filter(function (elem) {
  return elem.age >= 24;
});
console.log(filtered); //got an array
//printing an array
for (let name of filtered) {
  console.log(name.firstName);
  document.write(name.firstName + " ");
}
