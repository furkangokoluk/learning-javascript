// Mause Eventları

// DOMContentLoaded: Sayfa içeriği yüklendiğinde.
// load: Sayfa ve tüm kaynaklar tamamen yüklendiğinde.
// click: Bir HTML öğesine tıklama yapıldığında.
// dblclick: Bir HTML öğesine çift tıklama yapıldığında.
// mouseover: Fare öğenin üzerine geldiğinde.
// mouseout: Fare öğenin dışına çıkınca.
// mouseenter: Fare öğenin üzerine geldiğinde (iç içe geçmiş öğelerde tetiklenmez).
// mousedown: Bir HTML öğesine tıklama başladığında.

// DOMContentLoaded
window.addEventListener("DOMContentLoaded",run);

function run(){
    console.log("Sayfa Yüklendi");
}

// load
window.addEventListener("load", function loading(){
    console.log("Sayfa yüklendi");
});

// click
const cardTitle = document.querySelectorAll(".card-title")[1];

cardTitle.addEventListener("click",click);

function click(e){
    cardTitle.textContent = "Todo Listesine Tıklanıldı!";
    console.log(e.type);
}

// dblclick
cardTitle.addEventListener("dblclick",dblclick);

function dblclick(){
    cardTitle.textContent = "Todo Listesine Çift Tıklanıldı!";
}

// mouseover
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("mouseover", mouseover);

function mouseover(e){
    console.log(e.type);
}

// mouseout

cardBody.addEventListener("mouseout", mouseout);

function mouseout(e){
    console.log(e.type);
}

// mouseenter

cardBody.addEventListener("mouseenter", mouseenter);

function mouseenter(e){
    console.log(e.type);
}