const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


// foreach- foreach is used to the the looping of the function 

buttons.forEach(function (button) {
  console.log(buttons);
  button.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "green") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id === "red") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
