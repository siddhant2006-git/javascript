class user{
  constructor(email, username, password) {
    
    this.email = email;
    this.password = password;
    this.username = username;
  }

  encryptpassword() {
    return `${this.email}.gmail.com`
  }
    changeusername(){
    return `${this.username.toUpperCase()}`
    
    }

    }

  const chai=new user("chai","sidd@123","123")
console.log(chai.encryptpassword());
console.log(chai.changeusername());


// behind scene


// function user(email, username, password) {
//   this.email = email;
//   this.username = username;
//   this.password = password;
// }

// // prototype function - which  to add the method (user to make the object and store in the prototype )
// user.prototype.encryptpassword = function () {
//   return `${this.password}.abc`
// }

// const tea = new user("sidd@123", "siddhant", "123456789")
// console.log(tea.encryptpassword())

  
    
  
