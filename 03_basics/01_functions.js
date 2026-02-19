function saymyname() {
  console.log("s");
  console.log("d");
  console.log("i");
  console.log("e");
}

saymyname();

// (number1 or number line is parameters)

//function addtwonumber(number1, number2){

// console.log( number1+ number2)
//addtwonumber(3,2)  // argument

function addtwonumber(number1, number2) {
  let result = number1 + number2;

  // console.log("siddhant")
  return result;
}

const result = addtwonumber(33, 37);

console.log("result", result);

function loginuser(usename = 0) {
  if (!usename === undefined);
  {
    console.log("please enter the no");
    return;
  }
  return "${username} just logged in";
}

loginuser("siddhant");

console.log(loginuser);
