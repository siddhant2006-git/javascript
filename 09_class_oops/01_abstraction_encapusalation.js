// abstraction - display imp things and hide the internal things

class car{
  start() {
    this.#engineStart();
    console.log("car start")

  }

  #engineStart() {
    console.log("engine is running intially ")
  
  }

}
const Car = new car();
Car.start();


// encapsulation- data + method ko ek unit (class) me protect karaga

class balance {
  #balance = 0;


  Deposite(amount) {
    this.#balance += amount
  }

  getbalance() {
    return this.#balance;
  }
}
const account = new balance();
account.Deposite(1000)

console.log(account.getbalance());

