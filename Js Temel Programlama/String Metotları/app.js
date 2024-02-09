// String Sınıfının Metotları

let kurs ="Modern Web Geliştirme Kursu";
let tarih = "2022";
// charAt(): Belirtilen dizindeki karakteri döndürür.
// concat(): Bir veya daha fazla stringi mevcut stringe birleştirir.
// indexOf(): Belirtilen karakterin veya alt dizenin ilk indeksini döndürür.
// lastIndexOf(): Belirtilen karakterin veya alt dizenin son indeksini döndürür.
// toUpperCase(): Stringi büyük harfe dönüştürür.
// toLowerCase(): Stringi küçük harfe dönüştürür.
// trim(): Stringin başındaki ve sonundaki boşlukları kaldırır.
// slice(): Belirtilen indeksler arasındaki bir bölümü kopyalar.
// substring(): İki indeks arasındaki bir alt dizenin kopyasını döndürür.
// replace(): Belirtilen bir alt dizeyi başka bir alt dizeyle değiştirir.
// split(): Belirtilen ayırıcıya göre stringi parçalar ve bir diziye dönüştürür.
// valueOf(): String nesnesinin değerini döndürür.
// startsWith(): Belirli bir dizeyle başlayıp başlamadığını kontrol eder ve true/false döndürür.
// endsWith(): Belirli bir dizeyle bitip bitmediğini kontrol eder ve true/false döndürür.

//CHARTAT METOT KULLANIMI
// let karakter = kurs.charAt(1);
// console.log(karakter);

//CONCAT METOT
// let sonuc = kurs.concat(" ",tarih," Enes");
// console.log(sonuc);

//INDEXOF METOT
// let index = kurs.indexOf("W");
// console.log(index);

// let index = kurs.lastIndexOf("K");
// console.log(index);

//TOUPPERCASE METOT
// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);

//TOLOWERCASE METOT
// let sonuc = kurs.toLowerCase();
// console.log(sonuc);

//TRİM METOT
// console.log(kurs.trim());

//SLİCE METOT
// console.log(kurs);
// console.log(kurs.slice(22,28));

//SUBSTRİNG METOT
// console.log(kurs);
// console.log(kurs.substring(0,6));

//REPLACE METOT
// console.log(kurs);
// console.log(kurs.replace("Modern","Güncel"));

//SPLİT METOT
// console.log(kurs);
// let dizi = kurs.split(",");
// console.log(dizi);

//VALUEOF METOT
// console.log(kurs.valueOf());

//STARTSWITH METOT
// console.log(kurs);
// console.log(kurs.startsWith("M"));
// if(kurs.startsWith("M")){
//     console.log("M harfi ile başlamaktadır.");
// }

//ENDSWITH METOT
// console.log(kurs);
// console.log(kurs.endsWith("Geliştirme Kursu"));