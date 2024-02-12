/*
    ------------------- TÜR DÖNÜŞÜMLERİ -------------------
    strings, numbers, booleans, undefined, and null. 
    object , function
*/

//String veri tipinden number veri tipine dönüştürmek..
var a = 5;
var b = "10";
console.log(a+b); //! Çıktısı 510 olacaktır!!

b = Number(b); 
console.log("b değişkeninin tipi : " + typeof b + " b değişkeninin değeri : " + b);
console.log("a+b nin değeri : " + (a + b));


var a = 8.4;
var b = parseFloat(a); //! Çıkısı 8.4 olacaktır!!
var c = parseInt(a); //! Çıktısı 8 olacaktır!!
console.log("b değişkenin tipi : " + typeof b + " b değişkenin değeri : " + b);
console.log("c değişkenin tipi : " + typeof c + " c değişkenin değeri : " + c);


var a  = Number("B"); //! NaN değeri dönderecektir!! Harfler numbere dönderilemez!!
console.log(a);

//NUMBER TİPİNDEN STRİNG VERİ TİPİNE DÖNÜŞTÜRMEK
var x = String(55);
var y  = (55).toString();
console.log("x değişkenin tipi : " + typeof x + " x değişkenin değeri : " + x);
console.log("y değişkenin tipi : " + typeof y + " y değişkenin değeri : " + y);


var result = String(true);
console.log("result değişkenin tipi : " + typeof result + " result değişkenin değeri : " + result);




