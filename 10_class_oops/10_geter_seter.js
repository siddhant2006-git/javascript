// getter -can use to show the value
// setter-can use set the value

class User {
  constructor(email, password) {
    this._email = email;
    this._password = password;
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

// use of getter and setter
// Example: Using throw in setter for validation

siddhant.email = "newemail";
console.log(siddhant.email);

siddhant.password = "newpass";
console.log(siddhant.password);

// Enhanced class with throw validation
class ValidatedUser {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
// include - is used to the value can be included 
  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Invalid email format");
    }
    this._email = value;
  }

  get email() {
    return this._email;
  }

  set password(value) {
    if (value.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    this._password = value;
  }

  get password() {
    return this._password;
  }
}

try {
  const user = new ValidatedUser("test@gmail.com", "pass123");
  console.log(user.email);
} catch (error) {
  console.log("Error: " + error.message);
}
