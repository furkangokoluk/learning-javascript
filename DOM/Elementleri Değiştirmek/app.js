const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - Yeni";

cardBody.replaceChild(newTitle, cardBody.childNodes[1]);

// ----------------------------------------------

const addTodoBtn = document.querySelectorAll(".btn")[0];

newLink = document.createElement("a");
newLink.href = "#";
newLink.className = "linked";
newLink.textContent = "Todo Ekleyin - Yeni";
newLink.style.color = "white";

addTodoBtn.replaceChild(newLink, addTodoBtn.childNodes[0]);