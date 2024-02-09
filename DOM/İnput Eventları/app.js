// İNPUT EVENTLARI

// focus: Bir öğe odaklandığında tetiklenir.
// blur: Bir öğenin odaktan çıktığında tetiklenir.
// select: Bir öğe seçildiğinde tetiklenir.
// copy: Bir metin seçildiğinde kopyalama işlemi gerçekleştiğinde tetiklenir.
// paste: Bir metin yapıştırıldığında yapıştırma işlemi gerçekleştiğinde tetiklenir.
// cut: Bir metin kesildiğinde kesme işlemi gerçekleştiğinde tetiklenir.


// focus
const todo = document.querySelector("#todoName");

todo.addEventListener("focus", focus);

function focus(e){
    console.log(e.type);
}

// blur
todo.addEventListener("blur", blur);

function blur(e){
    console.log(e.type);
}

// select
todo.addEventListener("select", select);

function select(e){
    console.log(e.type);
}

// copy
todo.addEventListener("copy", copy);

function copy(e){
    console.log(e.type);
}

// paste
todo.addEventListener("paste", paste);

function paste(e){
    console.log(e.type);
}

// cut
todo.addEventListener("cut", cut);

function cut(e){
    console.log(e.type);
}