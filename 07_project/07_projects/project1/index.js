const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

// javascript cannot be return the single element

// it return an html collection

const addtodo = () => {
  // trim()- can delete the space in the input
  const inputText = inputbox.value.trim();
  if (inputText.length <= 0) {
    alert("enter the value greater than 0 length ");
  }

  if (addbtn.value == "edit") {
    edittodo.target.previousElementSibling.innerHTML = inputText;
    addbtn.value = "Add";
    inputbox.value = "";
  }

  // create the add button
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);
  inputbox.value = "";

  // delete the button

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "remove";
  deletebtn.classList.add("btn", "deletebtn");
  li.appendChild(deletebtn);

  // edit button

  // classlist-is property create the class in html

  const editbtn = document.createElement("button");
  editbtn.innerText = "edit";
  editbtn.classList.add("btn", "editbtn");
  li.appendChild(editbtn);

  todolist.appendChild(li);
};

let edittodo = null;

// target- it is click event formation
const updatetodo = (e) => {
  // console.log(e.target.innerText)
  if (e.target.innerText === "remove") {
    todolist.removeChild(e.target.parentElement);
  }
  if ((e.target.innerHTML == "edit")) {
    inputbox.value = e.target.previousElementSibling.innerHTML;
    // focus-place to the cursor in the input box

    inputbox.focus();
    addbtn.innerText = "edit";
    edittodo = e;

  }
};

addbtn.addEventListener("click", addtodo);
todolist.addEventListener("click", updatetodo);


