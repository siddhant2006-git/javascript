// map - is used to tranform the each element of array convert into new array (someelse )

const num = [1, 2, 3, 4, 5];
const result = num.map((num) => num * 2);
console.log(result);
// o/p - 2, 4,, 6, 8, 10 

// map - it is transfer the each element of array convert into html file
const arra = ["building todo", "edittransform"];
const htmls = arra.map((arra) => `<li> ${arra}<li>`);
console.log(htmls);
// O/P - [ '<li> building todo<li>', '<li> edittransform<li>' ]



// filter -array is used keep the  each item and check the condition of the array
// = - assign the value in variable
// == - equality the value  // 5=="5" true
// === - strictly equal the value // 5==="5" false

const arr = ["siddhant", "bhatnagar", "ram", "cat"];
const charcount = arr.filter((arr) => arr.length === 3);
console.log(charcount);
// [ 'ram', 'cat' ]

// reduce -is used to combine all elements of array can convert into single value
// accumulator → the running total/result
// currentValue → current element of the array
// initialValue → starting value of the accumulator (important!)

const redu = [1, 2, 34, 43, 42];
const allelements = redu.reduce((acc, num) => acc + num, 0);
console.log(allelements);
// O/P 122



// foreach - value cannot be return

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const value = numbers.filter((num) => {
  return (num > 4 && num>6)
})
console.log(value)
// 7,8,9,10


const books = [
  { names: "siddhant", class: "XII", rollno: 12 },
  {names:"kartik",class:"XI", rollno:10},
{names:"sarthak",class:"XI", rollno:11}
]
// filter - it can show the data 
// map - it can show the value in boolian login  true , false 

const access = books.filter((item) => item.class === "XI")
console.log(access)



