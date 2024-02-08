// https://www.youtube.com/watch?v=i1pxPSl9ZHc&list=WL&index=26

// Select elements
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');

// Vars
let todos = [];

// Form submit
form.addEventListener('submit', function (event) {
  event.preventDefault();

  saveTodo();
});

// Save Todo
function saveTodo() {
  const todoValue = todoInput.value;

  // Check if the todo is empty
  const isEmpty = todoValue === '';

  // Check for duplicate todos
  const isDuplicate = todos.some(
    (todo) => todo.value.toUpperCase() === todoValue.toUpperCase()
  );

  if (isEmpty) {
    alert("Todo's input is empty!");
  } else if (isDuplicate) {
    alert('Todo already exists!');
  } else {
    const todo = {
      value: todoValue,
      checked: false,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    };

    todos.push(todo);
    todoInput.value = '';
  }
}

/* 12:36 */
