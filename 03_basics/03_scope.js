if (true) {
  let a = 88; // local scope
  const b = 339;
  var c = 23;
}

// global scope
//console.log(a)
//console.log(b)

console.log(c);

function one() {
  const username = "siddhant";

  function two() {
    const website = "youtube";
    console.log(username); // works fine
    console.log(website); // works fine
  }

  two(); // call inside one
}

one();

if (true) {
  const username = "siddhant";
  if (username === "siddhant") {
    const websites = "youtube";
    console.log(username + websites);
  }
  console.log(username);
}

// +++++++++ intersting ++++++++

function add(num) {
  return num + 1;
}

add(5); // hosting

const addtwo = function (num) {
  // expertion -o, you can use variables and functions before declaring them.
  return num + 2;
};

addtwo(5);
