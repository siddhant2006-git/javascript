const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// getOwnPropertyDescriptor- to show the description of the object 

console.log(descriptor)

// const pi = 5;
// console.log(Math.pi)

//pi value cannot be change beacuse
//  value: 3.141592653589793,
  //writable: false,
//  enumerable: false,
//  configurable: false

const chai = {
  name: "sweet tea",
  price: 250,
  isavaible:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, "price",{
  writable: false,
  enumerable: false,
  
})

console.log(Object.getOwnPropertyDescriptor(chai, "price"))


for (let [key, value] of chai) {

  
}


