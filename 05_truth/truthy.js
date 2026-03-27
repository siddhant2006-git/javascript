const useremail = [49, 383, 3839, 3838, 383, 383];
if (useremail) {
  console.log("got user email");
} else {
  console.log("don't have useremaail");
}

// falsy value
//false,0,-0,bigint 0n, "", null, undifned,NaN

// truthy value
// "0","false "," ", [],{},function(){}

if (useremail.length === 6) {
  console.log("array is empty");
}

const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
  console.log("object is empty");
}

// nullish coalescing operator (???): null undefined

let val1;

//val1=6 ?? 10   // op/6
// val1=null ?? 10  // op/ 10
//val1=undefined ?? 10  // op/10

//val1=null?? 10??20 // op/10

console.log(val1);

// terniary operator

//condition ? true :false

const icecream = 100;
icecream <= 80 ? console.log("less than 80") : console.log("more than 80");
