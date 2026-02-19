// object - object is collection of key value pairs , when key is string and value in any datatype 

// singleton-a singleton just the method which are make only one object 

//object literals- object literals is method to creating the object with{}.

const mysym = Symbol("key1");

const js_user = {
  name: "siddhant",
  age: 19,
  location: "sambhal",
  mysym: "mykey1",
  email: "siddhant@12",
  isloggedIn: false,
  lastloginday: ["monday", "tuesday", "wednesday"],
};

console.log(js_user.email);
console.log(js_user["location"]);
console.log(typeof js_user.mysym);

js_user.email = "siddhangtbhatanagar@!23232";

//Object.freeze(js_user)

console.log(js_user.email);

js_user.greeting = function () {
   return console.log("hello krish"); // error
};

js_user.greetingtwo = function () {
  console.log(`hello krish, ${this.email}`)
};

console.log(js_user.greeting());
console.log(js_user.greetingtwo()); //error 
