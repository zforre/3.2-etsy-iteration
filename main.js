// 1.Show me how to calculate the average price of all items. Please console.log the average.

// sum all the prices
// then calculate the average
// let count = items.length;
// let average = sum / count;


let sum = items.reduce((acc, i) => {
  // acc is the first object in the items array without an initial value set
  // i is the second object in the items array without an ititial value set
  return acc + i.price;
}, 0); // 0 is the initial value

let count = items.length;

let average = sum / count;

console.log(average.toFixed(2));


// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.

let costFilter = items.filter((item) => {
return item.price >= 14.00 && item.price <= 18.00;
});

console.log(costFilter);

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

let findGbp = items.filter((item) => {
  return item.currency_code === "GBP";

});



console.log(findGbp); //not sure how to display correctly

// 4. Show me how to find which items are made of wood. Please console.log the ones you find.

let whatsWood = items.indexOf((item) => {
  return item.materials === "wood";
});

console.log(whatsWood); //need help

// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

let manyMaterials = items.filter((item) => {
return item.materials.length >= 8;
});

console.log(manyMaterials);


// 6. Show me how to calculate how many items were made by their sellers. Please console.log your answer.

let madeBySeller = items.filter((item) => {
  return item.who_made === "i_did";
})

console.log(madeBySeller.length);
