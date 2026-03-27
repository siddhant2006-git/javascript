function multiplyBy5(nums) {
  return nums*5;
}

//function is type of object

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype)

function createuser(username, score) {
  this.username = username
  this.score=score
}

createuser.prototype.increment = function () {
  this.score++;
}

createuser.prototype.printMe = function () {
  console.log(`score is ${this.score}`)
}

// new keyword -new object is created :the creation of object is intially face in object
// new keyword- new keyward is linked to the prototype of the constructor 
// new keyward - is used constructor call kiya jaata 

const chai =new  createuser("sidd", 10);
const code =new  createuser("bhatnagar", 33);

chai.printMe();
