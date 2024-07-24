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
  "Jan-Hendrik",
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
let nameProvinces = names.forEach((names, index) => {
  console.log(`${names}(${index})`);
});
console.log(nameProvinces);

// Uppercase Transformation
let uppercaseProvinces = provinces.map((provinces) => provinces.toUpperCase());
console.log(uppercaseProvinces);

// Name Lengths
let nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Sorting
let sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Filtering Cape
let filteredCapes = 