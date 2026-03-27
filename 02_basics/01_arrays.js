// array

const myarra = [0, 1, 2, 3, 4, 5, 6, 7, "true"];
console.log(myarra[0]);

// method of array

// push - add the element
myarra.push(6);
console.log(myarra);

// pop-delete the element
myarra.pop(7);

// unshift- add the element in starting face 
myarra.unshift(9);

// shift - remove the gap
myarra.shift();

// include - to show data the in array
console.log(myarra.includes(9));

//indexof-which are use to show the index of array
console.log(myarra.indexOf(2));

const newarra = myarra.join();

//console.log(myarra);
//console.log(newarra);

// slice - return the section of array

// waht is difference slice and splice -
// slice - whiich are not print the last value
// splice- which are print the last value

const array = myarra.splice(1, 3);
console.log("C", array);

// splice
// const rat = myarra.splice(1, 3);
// console.log(1, 3);

const marvel = ["thor", "krish", "spiderman"];
const car = ["thar", " fortuner", "scropio"];

marvel.push(car);

console.log(marvel);
console.log(marvel[3][1]);

const arrays = [1, 2, 3, 4, 5, 6, [8, (9)[(10, 12)]]];

const realarray = arrays.flat(4);
console.log(realarray);
