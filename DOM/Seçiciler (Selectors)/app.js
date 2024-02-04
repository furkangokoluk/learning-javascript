// Javascripten html etiketlerimizi 3 farklı yöntemle seçip yakalayabiliriz.
// - class name
// - id
// - tag name

// getElementById : id'ye göre elementi yakalar.
console.log(document.getElementById("todoAddButton"));
console.log(document.getElementById("todoAddButton").id);
console.log(document.getElementById("todoAddButton").getAttribute("id"));
console.log(document.getElementById("todoAddButton").className);
console.log(document.getElementById("todoAddButton").getAttribute("class")); // '.className' proprtysi ile aynı çıktı almamızı sağlar.
console.log(document.getElementById("todoAddButton").classList);
console.log(document.getElementById("todoAddButton").classList[3]);
console.log(document.getElementById("todoAddButton").textContent); // HTML etiketlerini dikkate almadan bir öğenin içeriğini düz metin olarak alır veya ayarlar.
console.log(document.getElementById("todoAddButton").innerHTML); // Öğenin içeriğini HTML olarak alır veya ayarlar, yani HTML etiketlerini işler.

console.log("1--------------------------------------------------------");

// getElementByClassName : class ismine göre elementi yakalar.
console.log(document.getElementsByClassName("list-group-item"));

const elementClass = Array.from(document.getElementsByClassName("list-group-item"));
elementClass.forEach(function(element){
    console.log(element)
})

console.log("2--------------------------------------------------------");

// getElemenByTagName : etiket isimine göre elementi yakalar.
console.log(document.getElementsByTagName("form"));
console.log(document.getElementsByTagName("form")[0]);
console.log(document.getElementsByTagName("form")[0].id);

console.log("3--------------------------------------------------------");

const elementForms = Array.from(document.getElementsByTagName("form"));
elementForms.forEach(function(form){
    console.log(form);
})

console.log(document.getElementsByTagName("li"));

console.log("4--------------------------------------------------------");

// querySelector - querySelecctorAll : Bu üç farklı yöntemi sadece bu metodlarlada sağlayabilriz!..

console.log(document.querySelector("#clearButton")); // id seçimlerinde css'deki gibi '#' kullanılır.
console.log(document.querySelector(".card-body")); // class seçimlerinde css'deki gibi '.' kullanılır.

console.log(document.querySelectorAll(".list-group-item")); // aynı class ismi birden fazla yerde kullanıldıysa 'querySelecctorAll' kullanılır.

// even çiflteri seçer -- odd tekleri seçer
console.log(document.querySelectorAll("li:nth-child(even)"));
console.log(document.querySelectorAll("li:nth-child(odd)"));

elementİndex = Array.from(document.querySelectorAll("li:nth-child(odd)"));

elementİndex.forEach(function(element){
    element.style.backgroundColor = "lightgrey"
})




