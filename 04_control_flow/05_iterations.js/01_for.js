// loop is know as iteration

// for loop
for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("hello siddhant ");
  }
  console.log(element);
}

for (let i = 0; i < 10; i++) {
  // console.log("outerloop accesss to ${i}")
  for (let j = 0; j < 24; j++) {
    // console.log(`innner loop access ${j})
    // console.log(i + '*' +  j + '=' + i*j );
  }
}

let myarray = ["krish", "mongo", "krishna"];

for (i = 0; i < 3; i++) {
  const element = myarray[i];
  console.log(element);
}

// break && continue

// for (let index = 1; index < 20; index++) {

//     if(index==5){
//         continue;
//     }
// console.log(`value is return ${index }`)
//}

// break

// for (let index = 1; index < 20; index++) {

//     if(index==5){
//        break;
//     }
//     console.log(`value is return ${index }`)
// }
