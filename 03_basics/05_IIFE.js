//immediate invoked function expression (IIFE)

(function chai() {
  console.log(`db connected`);
})();

// IIFE IS USE TO THE PROTECT THE THE POLLUTION OF GOLBAL SCOPE

((name) => {
  console.log(`sidd${name}`);
})(" siddhantbhatnagar");
