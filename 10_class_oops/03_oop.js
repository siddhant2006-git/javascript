// constructor - new instance

function user(username, loginvalue, password) {
  this.username =  username;
  this.loginvalue = loginvalue;
  this.password = password;

  return this

}

const userone = new user("siddhant", 11, true);
const usertwo =new  user("siddhant", 21, false)
console.log(userone);
