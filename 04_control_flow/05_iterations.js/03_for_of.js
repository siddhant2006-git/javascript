// for of

// ["","",""]   //array defined to the string form

// [{},{},{}]  // which are define the object

const arr = [1, 223, 43, 3, 33, 2, 33, 3];

for (const element of arr) {
  console.log(element);
}

const greeting = "hello world ";

for (const greet of greeting) {
  console.log(`each char is ${greet}`);
}

// map= unique value

const map = new Map();
map.set("in", "india");
map.set("yiu", "united state");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myobject = {
  game1: " free fire ",
  game2: "cat",
};
