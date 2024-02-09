const cardBody = document.querySelectorAll(".card-body")[1];

const newButton = document.createElement("a");
newButton.id = "goHelpTodo";
newButton.className = "btn btn-dark btn-sm mt-3";
newButton.href = "https://ptnbilisim.com/microsoft-to-do/";
newButton.target = "_blank";
newButton.innerHTML = "Todo Yardım";

cardBody.appendChild(newButton);

// -------------------------------------------------------------

const todoList = document.querySelector(".list-group");

const todo = document.createElement("li");
todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 4";

const todoDelete = document.createElement("a");
todoDelete.href = "#";
todoDelete.className = "delete-item";

const todoi = document.createElement("i");
todoi.className = "fa fa-remove";

todoDelete.appendChild(todoi);
todo.appendChild(todoDelete);
todoList.appendChild(todo);

