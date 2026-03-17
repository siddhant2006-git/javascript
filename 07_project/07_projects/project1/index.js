const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

// Note: getElementById returns a single element, not a collection.
let edittodo = null;

const addtodo = () => {
  const inputText = inputbox.value.trim();
  if (inputText.length <= 0) {
    alert("Enter a value with length greater than 0");
    return; // Prevent adding empty todos
  }

  if (addbtn.innerText === "edit") {
    // Use innerText for button text
    edittodo.querySelector("p").innerHTML = inputText;
    addbtn.innerText = "Add";
    inputbox.value = "";
    edittodo = null; // Reset after edit
    return; // Exit after editing
  }

  // Create the li element
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);
  inputbox.value = "";

  // Delete button
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "remove";
  deletebtn.classList.add("btn", "deletebtn");
  li.appendChild(deletebtn);

  inputbox.value = "";

  // Edit button
  const editbtn = document.createElement("button");
  editbtn.innerText = "edit";
  editbtn.classList.add("btn", "editbtn");
  li.appendChild(editbtn);

  todolist.appendChild(li);
  saveLocaltodos(inputText);
};

const updatetodo = (e) => {
  if (e.target.innerText === "remove") {
    // Use innerText
    todolist.removeChild(e.target.parentElement);
  }
  if (e.target.innerText === "edit") {
    // Changed = to ===
    edittodo = e.target.parentElement; // Store the li element
    inputbox.value = e.target.previousElementSibling.innerHTML;
    inputbox.focus(); // focus-cursor redirect the input box
    addbtn.innerText = "edit";
  }
};

// Local Storage Helper Comments:
// - saveLocaltodos: Stores a new todo in localStorage under the "todos" key.
// - setItem: Saves the array of todos as a JSON string in localStorage.
// - getItem: Retrieves the "todos" array from localStorage.
// - JSON.parse: Converts the JSON string from localStorage back into an array.

const saveLocaltodos = (todo) => {
  let todos = [];
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos !== null) {
    todos = JSON.parse(storedTodos);
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//
const getLocaltodo = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos !== null) {
    const todos = JSON.parse(storedTodos);
    todos.forEach((todo) => {});
  }
};

// delete the local storage
let deletelocaltodos = () => {
  if (storedTodos !== null) {
    const todos = JSON.parse(storedTodos);
  }
};

// DOMContentLoaded-is a brower event which are loaded and parsed
document.addEventListener("DOMContentLoaded", getLocaltodo);
addbtn.addEventListener("click", addtodo);
todolist.addEventListener("click", updatetodo);
