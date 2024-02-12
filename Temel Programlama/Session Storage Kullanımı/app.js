// Session Storage
// Local stroga : localStorage objesi ile kullanılır, session storage ile farkı yoktur.

// Değer ekleme
sessionStorage.setItem("10","Furkan");
sessionStorage.setItem("20","Şeyma");
sessionStorage.setItem("30","Nurten");
sessionStorage.setItem("40","Üzeyir");

// Değer Silme
sessionStorage.removeItem("10")

// Değer Alma
let value = sessionStorage.getItem("30");
console.log(value);

// Hepsini silme
// sessionStorage.clear();

// Array Ekleme
let names = ["Ali","Ayşe","Abdullah","Sıla","Ömer"];
sessionStorage.setItem("names", names); // Bu deger ekleme string olarak gerçekleşir.
sessionStorage.setItem("namesArr",JSON.stringify(names)); // Bu değer ekleme json formatta gerçekleşir. (Arraymiş gibi yazdı)

let result = sessionStorage.getItem("names"); // Bu deger alma string olarak gerçekleşir.
let resultArr = JSON.parse(sessionStorage.getItem("namesArr")); // Bu değer alma şekli array alma gibi gerçekleşir.

console.log(result);
console.log(resultArr);
