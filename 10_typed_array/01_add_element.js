// typed array- can store the mixed data to add and delete

let arra = [2, 4, 5];

arra.push(3);

arra[1] = "hello world ";
console.log(arra);

// typed array examle- which are store the number value
const buffer = new ArrayBuffer(8);

// createa typed array which have 4elements and 2 byte space



const typedArr = new Int16Array(buffer);

typedArr[0] = "20";
typedArr[1] = 20;
typedArr[2] = 30;
typedArr[3] = 40;


typedArr.push("hello world ")
console.log(typedArr);

