//Math.abs(x) → Returns absolute value (e.g., Math.abs(-7) → 7)

//Math.sqrt(x) → Square root (e.g., Math.sqrt(25) → 5)

//Math.cbrt(x) → Cube root (e.g., Math.cbrt(27) → 3)

//Math.pow(x, y) → Exponent (e.g., Math.pow(2, 3) → 8)

//Math.sign(x) → Returns -1, 0, or 1 depending on sign

// Rounding Functions

const score = 399;
console.log(score);

const balance = new Number(100);
console.log(balance);

// tostring.length - to convert the string form and show the lenght(3)
console.log(balance.toString().length);

// toprecision- is used to precies the value for 3,3
const anothernumber = 393.94949;
console.log(anothernumber.toPrecision(3));

// tolocalstring- used to change in proper indian way
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// abs- used to change negative value to positive
console.log(Math.abs(-3));

// round- which are use roundoff value
console.log(Math.round(9.3));
//console.log(Math.round(9.9))
//console.log(Math.round(9.5))

//ceil= use round off upper value
console.log(Math.ceil(3.3));

// floor-use for ground round off
console.log(Math.floor(2.3));

// min-minimum value
console.log(Math.min(2, 3, 3, 322, 222));

// max - used maximum value
console.log(Math.max(3, 98, 55, 5, 4, 4, 3));

//random
const max = 30;
const min = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
