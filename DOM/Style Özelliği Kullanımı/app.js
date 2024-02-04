const todo = document.querySelectorAll(".list-group-item")[0];

todo.style.color = "white";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "20px";

const todoList = document.querySelector(".list-group");

todoList.style.marginTop = "30px";
todoList.style.marginLeft = "30px";

const todoButton = document.querySelector("#clearButton")

todoButton.style.backgroundColor = "red";
todoButton.style.fontWeight = "bold";
todoButton.style.padding = "10px";
todoButton.style.borderRadius = "15px";

const darkMode = document.querySelector("body");
darkMode.style.backgroundColor = "black";
