// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "JanHendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercises

// ForEach Basics
let nameProvinces = names.forEach((name, index) => {
   console.log(`${name}(${provinces[index]})`);
});
//  console.log(nameProvinces);

// Uppercase Transformation
let uppercaseProvinces = provinces.map((provinces) => provinces.toUpperCase());
// console.log(uppercaseProvinces);

// Name Lengths
let nameLengths = names.map((name) => name.length);
// console.log(nameLengths);

// Sorting
let sortedProvinces = provinces.sort();
// console.log(sortedProvinces);

// Filtering Cape
let filteredCapes = provinces.filter((province) => !province.includes("Cape"));
// console.log(filteredCapes);

// Finding 'S'
let checkForS = names.map((name) => !name.includes("s"));
// console.log(checkForS);

// Creating Object Mapping
const arraysToObjects = names.map((name, index) => ({
  [name]: provinces[index],
}));
// console.log(arraysToObjects);

const convertToObject = arraysToObjects.reduce((acc, item) => {
  return { ...acc, ...item };
});
console.log(convertToObject);
