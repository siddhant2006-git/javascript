class user {
  // constructor-is the special method (function)which is automatically called when the object can be create class. it main purpose is to initialise object data
  // 1. it runs automatically
  //2.it is set the intially value of the variable
  //3. prepares the object which are used to them

  constructor(username) {
    speak();
    this.username = username;
  }
  // this keyword-is used to locate the current position

  // why this keyward  use ?
  //ans- this keyword can use beacuse it can allocate the live current postion if they cannot be use the this keyword so the all same name, class can access to them automatically

  logMe() {
    console.log(`usernameis ${this.username}`);
  }
}

// extend keyword- extend keyword is used transfer the property from parent to child

class teacher extends user {
  constructor(username, email, password) {
    speak(username);
    // speak- keyword refer to automatically set the value

    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(` A NEW COURSE WAS ADDED ${this.username}`)
  }
}

const chai = new teacher("chai", "siddhant", "123");

console.log(chai)