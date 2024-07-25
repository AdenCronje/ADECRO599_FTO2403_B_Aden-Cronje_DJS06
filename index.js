// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const shoppingItems = products;

//   Advanced Exercises

// Log Products
shoppingItems.forEach((product) => console.log(product.product));

// Filter by Name Length(longer than 5 characters)
let filteredProducts = shoppingItems
  .filter((product) => product.product.length > 5)
  .map((product) => product.product);
console.log(filteredProducts);

// Price Manipulation
let validProducts = shoppingItems
  .filter((product) => product.price && !isNaN(product.price))
  .reduce((acc, product) => acc + Number(product.price), 0);
console.log(validProducts);

// Concatenate Product Names
let allProductNames = products.reduce(
  (acc, product) => acc + product.product + " ",
  ""
);
console.log(allProductNames);

// Find Extremes in Prices
