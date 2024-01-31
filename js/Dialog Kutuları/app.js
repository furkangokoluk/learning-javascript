// Dialog Kutuları
/*
    alert()
    prompt()
    confirm()
*/

let firstName = prompt("Lütfen İsminizi Giriniz");
alert("Merhaba " + firstName + " Hoşgeldiniz");
let bool = confirm("İsminizle siteye giriş yapmak istiyor musunuz?");

document.write(bool ? ("Sitemize " + firstName + " isiminizle başarıyla giriş yaptınız!") : "Tekrar görüşmek üzere hoşcakalın");
;