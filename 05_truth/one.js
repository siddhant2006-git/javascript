// if
const temparture = 89;

if (temparture < 50) {
  console.log("less than 50");
} else {
  console.log("greater than 60");
}
console.log("temparture is greater than is 20");

//<,>,<=,=>,==,!=,===,!==
// == check out the value
// = assignment operator
// === is use check the data type formation like to string , integer

//const score=10002

//if(score>900){
// var power="fly" // var function is basic use the global function
//console.log(`user name `)
//}

//console.log(`user power:${power}`);

// const balance=40
// if(balance>5000){
// console.log("test");
// }else if(balance>999){
//     console.log("less than 1000");
// }else if(balance>600){
//     console.log("greater than 600")
// }else{
//     console.log("default")
// }

const userloggin = true;
const debitcard = true;
const googleemail = false;
const phonenumber = true;

if (userloggin && debitcard) {
  console.log("allow to the shopping");
}

if (googleemail || phonenumber) {
  console.log("you are able to shopping");
}
