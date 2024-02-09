const todos = document.querySelectorAll(".list-group-item");
todos[0].remove(); // Todo 1 i Sildi

todos[todos.length - 1].remove(); // Todo 6 i Sildi

// ----------------------------------------------------------

const todoList = document.querySelector(".list-group");
todoList.removeChild(todos[2]); // Todo 3 ü sildi

todoList.removeChild(todoList.lastElementChild); // Todo 5 i sildi