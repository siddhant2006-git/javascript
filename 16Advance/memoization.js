// memoization - it can store the previous data if the data can be privous then it can run the privous with calculation

function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      console.log("catched data ");
      return cache[n];
    }
    console.log("calculating ");

    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
function square(n) {
  return n * n;
}

const memoizationsqaure = memoize(square);

console.log(memoizationsqaure(5));
console.log(memoizationsqaure(5));
console.log(memoizationsqaure(10))
