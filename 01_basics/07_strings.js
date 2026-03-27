// string - string is the sequence of the character used to represent the text

let name = "siddhant ";
let surname = "bhatnagar";
console.log(name + surname);

//consolelog('hello my name is ${name} and my repo count is ${surname}');

// to find the string -for indexing [0],[1],[2]

const gamename = new String("siddhant");

console.log(gamename[0]);
console.log(gamename.__proto__);

// __proto__- is  function which are help from length , upper case ,lower.case

// length - define length
console.log(gamename.length);

//toUpper case -all captial letter
console.log(gamename.toUpperCase());

// charAt=postion of caracter
console.log(gamename.charAt(2));

//slice- reverse value
console.log(gamename.slice(0, 4));
console.log(gamename.slice(4));

//trim= delete space
console.log(gamename.trim());

let br = "siddhant";

// replace - those letter which are replace
console.log(br.replace("siddhant", "bro"));

//include is verify the letter in string

