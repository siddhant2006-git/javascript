/**
 * Immediate Invoked Function Expression (IIFE)
 * 
 *    IIFE is a function that is executed immediately after it is defined.
 * 
 *    It doesn't require being called explicitly and is useful for:
 *       - Creating a new scope to avoid polluting the global namespace
 *       - Avoiding variable name conflicts
 *       - Executing initialization code that only needs to run once
 * 
 *     Syntax: (function() { ... })();
 * 
 *     The first example shows a named IIFE function that logs "db connected".
 *     The second example shows an arrow function IIFE that accepts a parameter
 *     and logs a concatenated string with the provided name argument.
 * 
 *     Both functions execute immediately upon definition without needing explicit invocation.
 */

(function chai() {
  console.log(`db connected`);
})();

// IIFE

((name) => {
  console.log(`sidd${name}`);
})(" siddhantbhatnagar");