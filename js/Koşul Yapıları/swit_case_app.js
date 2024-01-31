let newRow = "\r\n";
let text = "1-Bakiye Görüntüleme"+newRow
+ "2-Para Çekme " + newRow
+ "3-Para Yatırma"+ newRow
+ "4-Çıkış"+ newRow
+ "İşlem yapmak istediğiniz değeri seçiniz!..";

let select = Number(prompt(text));
let balance = 1000;

switch (select){
    case 1 :
        alert ("Bakiyeniz :" + balance);
    break;

    case 2 :
        var amount = Number(prompt("Çekmek istediğiniz tutarı giriz.."));
        if (balance > amount){
            balance -= amount;
            alert ("Para çekme işleminiz başarılıdır.. " + newRow + "Kalan bakiye : " + balance);
        }else{
            "Bakiyeniz Yetersizdir!.." + newRow + "Bakiyeniz : " + balance + "Çekilecek Tutar : " + amount;
        }
    break;
    case 3 :
        var amount = Number(prompt("Yatırmak istediğiniz tutarı giriniz.."))
        balance += amount;
        alert ("Para Yatırma İşleminiz Başarılı.." + newRow + "Yatırdığınız Tutar : " + amount + newRow + "Mevcut Bakiyeniz : " + balance);
    break;

    case 4 :
        alert ("Çıkış İşleiniz Başarıyla Yapılmıştır.. " + newRow + "İyi Günler.. :)");
    break;

    default :
        alert("Lütfen 1 ile 4 arasında bir seçim yapınız");
    break;
}