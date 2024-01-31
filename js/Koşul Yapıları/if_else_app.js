const dizel = 40 , benzin = 43, lpg = 17;
newRow = "\r\n";
const fuelText = "1-Dizel --> " + dizel + newRow + "2-Benzin --> " + benzin + newRow + "3-LPG --> " + lpg + newRow + "Yakıt Türünü Seçiniz: ";
fuelType = prompt(fuelText);

if (fuelType == 1 || fuelType == 2 || fuelType == 3){
    fuelLiter = prompt("Yakıt litresini giriniz:");
    balance = prompt("Bakiyenizi giriniz: ");
    if(fuelType == 1){
        amount = fuelLiter*dizel;
        if (balance>amount){
            alert("Dizel yakıt alma işleminiz başarılı.." + newRow + "Kalan Bakiye : " + (balance - amount) + " TL");
        } else{
            alert("Bakiyeniz yeterli değil!.. " + newRow + "Eksik tutar: " + -(balance - amount) + " TL");
        }
    }else if(fuelType == 2) {
        amount = fuelLiter*benzin;
        if (balance>amount){
            alert("Benzin yakıt alma işleminiz başarılı.." + newRow + "Kalan Bakiye : " + (balance - amount) + " TL");
        } else{
            alert("Bakiyeniz yeterli değil!.. " + newRow + "Eksik tutar: " + -(balance - amount) + " TL");
        }
    
    }else{
        amount = fuelLiter*lpg;
        if (balance>amount){
            alert("LPG yakıt alma işleminiz başarılı.." + newRow + "Kalan Bakiye : " + (balance - amount) + " TL");
        } else{
            alert("Bakiyeniz yeterli değil!.. " + newRow + "Eksik tutar: " + -(balance - amount) + " TL");
        }
    }
}else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!..");
}