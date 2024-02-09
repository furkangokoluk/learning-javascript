const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch")

let todos;

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodo)
    clearButton.addEventListener("click", clearTodos)
    filterInput.addEventListener("keyup", filter)
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}

function addTodo() {
    const inputText = addInput.value.trim();

    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayınız!")
    } else {
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo Eklendi.");
    }

    addInput.value = "";
    e.preventDefault();  // Farklı bir sayfaya gtimesini engelledik.
}

function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    div.style.margin = "15px";

    firstCardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2500);
}

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const allTodo = document.querySelectorAll(".list-group-item");

    if (allTodo.length > 0) {
        allTodo.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block")
            } else {
                todo.setAttribute("style", "display : none !important"); // important bootstrapın değil burada yazılanın geçerli olmasını sağlar!.
            }
        })
    } else {
        showAlert("warning", "Todo bulunamadı!")
    }
}

function removeTodo(e) {
    if (e.target.className == "fa fa-remove") {
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        removeTodoToStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi..");
    }
}

function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (removeTodo == todo) {
            todos.splice(index);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    })
}

function clearTodos() {
    const todoAll = document.querySelectorAll(".list-group-item");
    if (todoAll.length > 0) {
        todoAll.forEach(function (todo) {
            todo.remove();
        })
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Tüm todolar başarılı bir şekilde silindi.")
    } else {
        showAlert("warning", "Silinecek bir todo bulunamadı!")
    }
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}