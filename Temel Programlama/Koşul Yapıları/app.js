let newRow = "\r\n";
let text =
    "1-Akaryakıt Uygulaması" +
    newRow +
    "2-ATM Uygulaması" +
    newRow +
    "3-Sonlandır"
newRow +
    "Bir Seçim Yapınız";
while (true) {
    let select = Number(prompt(text));

    if(select==3)
    break;

    if (select == 1) {
        const dizel = 40, benzin = 43, lpg = 17;
        newRow = "\r\n";
        const fuelText = "1-Dizel --> " + dizel + newRow + "2-Benzin --> " + benzin + newRow + "3-LPG --> " + lpg + newRow + "Yakıt Türünü Seçiniz: ";
        fuelType = prompt(fuelText);

        if (fuelType == 1 || fuelType == 2 || fuelType == 3) {
            fuelLiter = prompt("Yakıt litresini giriniz:");
            balance = prompt("Bakiyenizi giriniz: ");
            if (fuelType == 1) {
                amount = fuelLiter * dizel;
                if (balance > amount) {
                    alert("Dizel yakıt alma işleminiz başarılı.." + newRow + "Kalan Bakiye : " + (balance - amount) + " TL");
                } else {
                    alert("Bakiyeniz yeterli değil!.. " + newRow + "Eksik tutar: " + -(balance - amount) + " TL");
                }
            } else if (fuelType == 2) {
                amount = fuelLiter * benzin;
                if (balance > amount) {
                    alert("Benzin yakıt alma işleminiz başarılı.." + newRow + "Kalan Bakiye : " + (balance - amount) + " TL");
                } else {
                    alert("Bakiyeniz yeterli değil!.. " + newRow + "Eksik tutar: " + -(balance - amount) + " TL");
                }

            } else {
                amount = fuelLiter * lpg;
                if (balance > amount) {
                    alert("LPG yakıt alma işleminiz başarılı.." + newRow + "Kalan Bakiye : " + (balance - amount) + " TL");
                } else {
                    alert("Bakiyeniz yeterli değil!.. " + newRow + "Eksik tutar: " + -(balance - amount) + " TL");
                }
            }
        } else {
            alert("Lütfen geçerli bir yakıt türü seçiniz!..");
        }
    }

    if (select == 2) {
        let newRow = "\r\n";
        let text = "1-Bakiye Görüntüleme" + newRow
            + "2-Para Çekme " + newRow
            + "3-Para Yatırma" + newRow
            + "4-Çıkış" + newRow
            + "İşlem yapmak istediğiniz değeri seçiniz!..";

        let select = Number(prompt(text));
        let balance = 1000;

        switch (select) {
            case 1:
                alert("Bakiyeniz :" + balance);
                break;

            case 2:
                var amount = Number(prompt("Çekmek istediğiniz tutarı giriz.."));
                if (balance > amount) {
                    balance -= amount;
                    alert("Para çekme işleminiz başarılıdır.. " + newRow + "Kalan bakiye : " + balance);
                } else {
                    "Bakiyeniz Yetersizdir!.." + newRow + "Bakiyeniz : " + balance + "Çekilecek Tutar : " + amount;
                }
                break;
            case 3:
                var amount = Number(prompt("Yatırmak istediğiniz tutarı giriniz.."))
                balance += amount;
                alert("Para Yatırma İşleminiz Başarılı.." + newRow + "Yatırdığınız Tutar : " + amount + newRow + "Mevcut Bakiyeniz : " + balance);
                break;

            case 4:
                alert("Çıkış İşleiniz Başarıyla Yapılmıştır.. " + newRow + "İyi Günler.. :)");
                break;

            default:
                alert("Lütfen 1 ile 4 arasında bir seçim yapınız");
                break;
        }
    }

}