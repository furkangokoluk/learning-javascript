// For in & For of Döngüleri

let names = ["Furkan","Ayşe","Ali","Fatma","Volkan","Salih"];

// forEach döngüsü

names.forEach(function(name){
    console.log("forEach -> " + name);
})

console.log("-------------------------------------------------");

names.forEach(name => console.log("forEach -> " + name));

console.log("-------------------------------------------------");

// For in döngüsü
for (let name in names){
    console.log("for in -> " + name);
}

console.log("-------------------------------------------------");

// For of döngüsü
for (let name of names){
    console.log("for of -> " + name)
} 