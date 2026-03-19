function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function email() {
      return `${this._email.toUpperCase() }@gmail.com`;
    },

    set: function email(value) {
      this._email = value.toUpperCase();
    },
  });
}

const siddhant = new user("siddhant" , "bhatnagar");

console.log(siddhant.email);



