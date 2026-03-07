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

addbtn.addEventListener("click", addtodo);
