//Set Kullanımı : Bir değer yalnız bir kere eklenebilir!!

const set1 = new Set()

//ADD
set1.add("Furkan");
set1.add("Ahmet");
set1.add("Taha");
set1.add(22);
set1.add(true);
set1.add([1, 2, 3, 4, 5]);

console.log(set1);

//SİZE
console.log(set1.size);
set1.add("Furkan");
set1.add("Furkan");
set1.add("Furkan");
console.log(set1.size);

//DELETE
set1.delete("Furkan");
console.log(set1.size);
console.log(set1);

//HAS
console.log(set1.has(22));
console.log(set1.has("Yasemin"));

//For of ile set üzerinde dönme
for (let value of set1) {
    console.log(value);
}

//Set'ten array oluşturma
const values = Array.from(set1);
console.log(values);

//Array'den set oluşturma
let array = ["Fatma","Hariye","Hilal","Sevgi","Faruk"];
const mySet = new Set(array);
console.log(mySet);
