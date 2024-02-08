// https://www.youtube.com/watch?v=i1pxPSl9ZHc&list=WL&index=26

// Select elements
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');

// Vars
let todos = [];

// Form submit
form.addEventListener('submit', function (event) {
  event.preventDefault();

  saveTodo();
  renderTodos();
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

// Render todos
function renderTodos() {
  // Clear element before a re-render
  todosListEl.innerHTML = '';

  // Render todos
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
      <div class="todo" id=${index}>
        <i class="bi ${
          todo.checked ? 'bi-check-circle-fill' : 'bi-circle'
        }" style="color: ${todo.color}"></i>
        <p class="">${todo.value}</p>
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-trash"></i>
      </div>
    `;
  });
}

// Click event listener for all the todos
todosListEl.addEventListener('click', (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  if (parentElement.className !== 'todo') return;

  const todo = parentElement;
  const todoId = Number(todo.id);

  console.log(parentElement);
});

/* 26:46 */
