// javascript excution context
//global execution context
//function exexcution
// eval excution

// javascript is single threaded language

let value1 = 20; // undefined value
let value2 = 39; // undifined value
function addnum(num1, num2) {
  // defination of code
  let total = num1 + num2;
  return total;
}
let result1 = addnum(value1, value2); // undifined
let result2 = addnum(10, 2); // undefined

//  execution code step:

// 1. global execution
// 2. memory creation phase - variable locate

// 3. excution phase
