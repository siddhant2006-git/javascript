// currying - curring can work multiple argument . it can access for the multiple arugment


function price(tax) {
  return function (b) {
    return function (c) {
      return tax + b + c;
      
    }
  }
  
}
console.log(price(10)(20)(30));

// real time 

  
const multiple = (a) => (b) => (c) => a * b * c

const mupltiplyby10 = multiple(10)

console.log(mupltiplyby10(10)(20))
console.log(mupltiplyby10(30)(40));





