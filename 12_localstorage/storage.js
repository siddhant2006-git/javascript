//Application State (todos array)
//    ↓
// Convert to JSON string
//         ↓
// Save in LocalStorage
//         ↓
// Reload page
//         ↓
// Read JSON string
//         ↓
// Convert back to JS object

// 1. persistent storage- it store the current state in local storage

// Saves the todos array to browser's localStorage.
// Converts the todos array to a JSON string and stores it with the key "todo".

// Given todos array
const todos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
];

// Convert to JSON string and save to localStorage
localStorage.setItem("todos", JSON.stringify(todos));

// Retrieve and parse from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todo"));
console.log(savedTodos);

// Better approach: Create a reusable function
function saveTodos(todosArray) {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

// Usage
saveTodos(todos);
const loadedTodos = loadTodos();
console.log(loadedTodos);
