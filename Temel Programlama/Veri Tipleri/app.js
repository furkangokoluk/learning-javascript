// Veri Tipleri
/*
    1-String
    2-Number
    3-Boolean
    4-Null
    5-Undefined
    6-Object
    7-Function
*/

// string
let firsName = "Furkan ";
let lastName ="Gökoluk";
let fullName = firsName + lastName;

console.log("Veri Tipi: " + typeof fullName + " --> " +"Tam isminiz: "+ fullName);

// number
let birthYear = 2001;
let currentYear = 2024;
let age = currentYear - birthYear;

console.log("Veri Tipi: " + typeof age + " --> " +"Yaşınız: "+ age);

// boolean
let maritalSituation = false;

console.log("Veri tipi: " + typeof maritalSituation + " --> " + "Evlilik Durumunuz: " + (maritalSituation ? "Evli" : "Bekar"));

// undefined

let unused;
console.log("Veri tipi: " + typeof unused + " --> " + "Tanımlanmamış değişken: " + unused);

// object
let educationalİnformation = {
    okulu : "Gümüşhane Üniversitesi",
    fakultesi : "Mühendislik ve Doğa Bilimleri",
    bolumu : "Yazılım Mühendisliği",
    sınıfı : 3
};

console.log("Veri tipi: " + typeof educationalİnformation);
console.log(educationalİnformation);

let numbers = [1,2,3,4,5,6,7,8,9,0];
console.log("Veri tipi: " + typeof numbers + " --> " + "Rakamlar: " + numbers);
