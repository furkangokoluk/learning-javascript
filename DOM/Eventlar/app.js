function changeTitle(){
    document.querySelectorAll(".card-title")[0].textContent = "Todo List Sayfası Başlığı Değişti";
}

// ------------------------------------------------------------------

const deleteBtn = document.querySelector("#clearButton");
const addBtn = document.querySelector("#todoAddButton");
const todos = document.querySelectorAll(".list-group-item");

deleteBtn.addEventListener("click",deleteTodo);
addBtn.addEventListener("click",events);

function deleteTodo(){
    for(let i = 0 ; i < todos.length ; i++){
        todos[i].remove();
    }
}

function events(e)
{
    console.log(e.type)
    console.log(e.target)
    console.log(e.target.textContent)
}

