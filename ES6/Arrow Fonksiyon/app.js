// Klasik fonksiyon tanımlama
function print1(){
    console.log("Merhaba Dünya");
}

print1();

// Arrow function tanımlama
const print2 = () => console.log("Merhaba Dünya");

print2();

// Parametreli arrow function
const fullNamePrint = (firstName,lastName) => console.log("Merhaba " + firstName + " " + lastName);

fullNamePrint("Furkan","Gökoluk");

// Tek parametre alan arrow function tanımlamanın diğer bir yolu
const firstNamePrint = firstName => console.log("Merhaba " + firstName);

firstNamePrint("Furkan");

// Tek satırlı geri değer dönüren arrow function tanımlama
const kupAl = x => x*x*x ;

console.log(kupAl(3));