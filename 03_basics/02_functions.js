function price(val1, val2, ...num1) {
  // ...=rest operator
  return num1;
}

console.log(price(200, 300, 400));

// object pass in function

const user = {
  username: "siddhantbhatnagar",
  price: 199,
};

function handleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price} `,
  );
}

handleobject(user);

// array pass through the function

arrays = [33, 4884, 34989393, 39839];

function newsecondvalue(newarray) {
  return arrays[1];
}

console.log(newsecondvalue(arrays));
