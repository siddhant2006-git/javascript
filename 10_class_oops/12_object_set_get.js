const user = {
  _email: "siddhant@123",
  _password: "123",

  get email() {
    return this._email.toUpperCase().includes("@");
  },

  set email(value) {
    this._email = value.toUpperCase();
  },
};
// include - can check the value which has inserted in this code 
// object.crete -create the new object 

const siddhant = Object.create(user);
console.log(siddhant.email);