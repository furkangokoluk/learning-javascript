/*
-Javascript senkron çalışan bir programlama dilidir.

!Asenkron Çalışdığı Durumlar :
-Timing
-Event
-Http istekleri

!Asenkron Yapıları Senkrona Çevirip Yönettiğimiz Durumlar :
-Callback
-Promise
-Async & Await
*/



// Timing Asenkron
console.log("1. Komut Çalıştı");;

setTimeout(() => {
    console.log("2. Komut Çalıştı");
}, 1000);

setTimeout(() => {
    console.log("3. Komut Çalıştı");
}, 500);

console.log("4. Komut Çalıştı");