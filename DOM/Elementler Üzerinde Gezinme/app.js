const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");

// Anneden çocuklara erişmek
console.log(todoList.children);
console.log(todoList.children[1]);
console.log(todoList.children[todoList.children.length - 1]);
console.log(todoList.children[todoList.children.length - 1].textContent);

const value = Array.from(todoList.children);
value.forEach(function (todo) {
    console.log(todo.textContent);
})

console.log("-------------------------------");

// Çocuktan anneye erişmek
console.log(todo.parentElement);
console.log(todo.parentElement.parentElement);

console.log("-------------------------------");

// Kardeşler arasında gezinmek
console.log(todo);
console.log(todo.nextElementSibling);
console.log(todo.nextElementSibling.nextElementSibling);

const todoLastChild = document.querySelector(".list-group-item:nth-child(3)");

console.log(todoLastChild.previousElementSibling);
console.log(todoLastChild.previousElementSibling.previousElementSibling);

console.log("-------------------------------");

// örnek uygulama
const result = card.children[3].children[0];
console.log(result);
result.textContent = "Todo Listesi Başlığı Değişti"
result.style.color = "red";