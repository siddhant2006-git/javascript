// ES6

// constructor - it is special type of method which are automatically called object can create the class

class user {
  constructor(email, name, password) {
    this.email = email;
    this.name = name;
    this.password = password;
  }

  // this - this keyord is used to the current location of object
  // this keyword not be  used if the same class and name can be automatically run any file name 

  encryptpassword() {
    return `${this.password}abc`

    // return keyward is used to return the value of encryptpassword 
  }

  changeusername() {
    return `${this.name.toUpperCase()}`
    
  }
}
// new keyword - is used to the creation of the new object from the constructor function 

const chai =new  user("chai", "siddhant", "123")

console.log(chai.encryptpassword())
console.log(chai.changeusername());






