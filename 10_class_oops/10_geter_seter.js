
// getter -
// setter

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // ✅ Proper getter for email
  get email() {
    return `${this._email}@gmail.com`;
  }

  set email(value) {
    this._email = value.toUpperCase();
  }

  get password() {
    return `${this._password}@strongpassword`;
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const siddhant = new User("siddhant@123", "abc");

console.log(siddhant.password);
console.log(siddhant.email);
