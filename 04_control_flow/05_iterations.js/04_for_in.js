const myobject = {
  js: "javascript",
  cpp: " ruby",
};

for (const key in myobject) {
  console.log(`${key} shortcut is for ${myobject[key]}`);
}

// for in loop- work to represted the key
// for of loop- work to represeted the elements

const programing = ["js", "rb", "pu"];

for (const key in programing) {
  console.log(key);
}
