const mynums = [1, 3, 4, 5, 6, 8, 85, 7, 9, 83];

// const add_10 = mynums.map((num) => num + 10)

//chaining -two or more condition in one  problem
const add_10 = mynums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
console.log(add_10);

const mynum = [1, 2, 3, 45, 4, 5, 6];

const redu = mynum.reduce((acc, curvalue) => {
  return acc + curvalue;
}, 0);

console.log(redu);

// ex

const shopping = [
  { item: "gold", price: 100 },
  { item: "silver", price: 200 },
  { iten: "diamond", price: 500 },
]

const shoppingprice = shopping.reduce((acc, items) => acc + items.price,0 )  
console.log(shoppingprice)
