// stack(primitive), heap(non - primitive)

// there are two types of memory

// 1. static memory - memory is allocate at complile time

//.fixed size
//. cannot be resized
// .faster access
//.stored in stackn or data segment

// stack - stack is linear structure data which follow the lifo(last in first out )


// dynamic memory - memory is allocated at runtime

// flexible size(to change the size )
//alloction from heap(to reserve the memory in special area is known heap memory )
//stack allocation  - can push and push and pull the element

let arrays = [1, 2, 3, 4, 5, 6]
arrays.push(11)
console.log(arrays);

// push method - can add the element in last element of the array

let chai = ["hello", "krish", "kartik"]
chai.pop();
console.log(chai);

// pop- can delete the element in last of the array 


let mychannel = "siddhant ";
let another = mychannel;
another = "krish";
console.log(another);
console.log(mychannel);

let userone = {
  email: "user@gmail.com",
  bank: "user@ybl",
};
let usertwo = userone;

usertwo.email = "siddhant@123";

console.log(userone);
console.log(usertwo);

//consolelog('hello my name is ${name} and my repo count is ${surname}');
