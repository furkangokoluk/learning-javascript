// Destructingi Arraylarde Kullanımı

 let langs = ["C#", "C++", "JavaScript", "Python"];

 let [lang1,lang2,lang3,lang4] = langs; // Destructing

 console.log(lang1,lang2,lang3,lang4);


 const calculate = (a,b) => {
    const topla = a+b;
    const cikar = a-b;
    const carp = a*b;
    const bol = a/b;

    array = [topla,cikar,carp,bol];

    return array;
 }

 let [a,b,c,d] = calculate(6,2); // Destructing

 console.log(a,b,c,d);

 // Destructingi Objelerde Kullanımı

 const person = {
    firstName : "Furkan",
    lastName : "Gökoluk",
    salary : 5000,
    age : 22
 }

let {firstName:isim,lastName:soyisim,salary:maas,age:yas} = person; // Destructing (keylerle aynı ismi alması, isimini değiştirmek istersek bu şekilde değiştiriyoruz.);

console.log(isim,soyisim,maas,yas);

