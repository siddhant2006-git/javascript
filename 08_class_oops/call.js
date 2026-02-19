function setusername(username) {

  // complex DB call 

  this.username=username
  console.log("called")

}

function createuser(username, email, password) {

// call function -execution the context 
  setusername.call(this,username)
  

  this.email = email
  this.password=password
}
// new-set the new empty object 

const chai = new createuser("siddhant", "sidd@", "1234")
console.log(chai)


