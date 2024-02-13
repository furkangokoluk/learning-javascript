// Map Kullanımı

const map1 = new Map();

// SET
map1.set(1,"Adana");
map1.set(6,"Ankara");
map1.set(33,"Mersin");
map1.set(34,"İstanbul");
map1.set(35,"İzmir");

//GET
console.log(map1.get(33));

//SİZE
console.log(map1.size)

//DELETE
console.log(map1.delete(6));
console.log(map1.size);

//HAS
console.log(map1.has(35));
console.log(map1.has(6));

//For of ile map üzerinde dönme
for (let [key,value] of map1){  //Destructing
    console.log(key,value);
}

console.log("-------------------------------------------------");

for (let value of map1.values()){
    console.log(value);
}

console.log("-------------------------------------------------");

//forEach ile öap üzerinde dönme
const keys = Array.from(map1.keys());
keys.forEach(key => console.log(key, map1.get(key)));

//Map'ten Array'a Çevirme
const array = Array.from(map1);
console.log(array);

//Array'i Map'e çevirme
const array2 = [
    [1,"Furkan"],
    [2,"Ayşe"],
    [3,"Fatma"],
    [4,"Ali"],
    [1,"Mehmet"]
]

const myMap = new Map(array2);
console.log(myMap);