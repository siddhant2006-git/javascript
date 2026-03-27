const user = {
  username: "siddhant  bhatnagar",
  price: 999,

  welcomemessage: function () {
    console.log(`${this.username}, welcome to my websites `);
    console.log(this);
  },
  // this fuction- is used to locate the current statement in object{}
};

user.welcomemessage();

user.username = "krish bhatnagar";

user.welcomemessage();

// browser ka under jo global hai-windows

//function chai(){
// let username="siddhant"
//console.log(this.username);
//}

//chai()

const chai = () => {
  let userneme = "siddhant ";
  console.log(this);
};

chai();

// arrow fuction=
// denoted the arrow function - ()=>

// {}- function which are use to include the return statement
//  const twonum=(num1,num2) =>
// {
// return num1+num2
// }         basic arrow function
// console.log(twonum(3,8))

// implict arrow fuction - use ()paranthese which cannot be use return function

// const twonum= (num1,num2) =>  num1+num2

//basic arrow function
//console.log(twonum(3,8))

const twonum = (num1, num2) => ({ usename: "siddhant bhatnagar" });
console.log(twonum(3, 4));
