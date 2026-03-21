const mynums = [1, 3, 4, 5, 6, 8, 85, 7, 9, 83]

// const add_10 = mynums.map((num) => num + 10)



//chaining -two or more condition in one  problem
const add_10 = mynums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num>40  )
console.log(add_10)
