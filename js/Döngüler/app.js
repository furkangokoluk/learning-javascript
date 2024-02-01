let newRow = "\r\n";
let text =
    "1-Çarpım Tablosu" +
    newRow +
    "2-Asal Sayı Bulma Uygulaması" +
    newRow +
    "3-Faktöriyel Bulma Uygulaması" +
    newRow +
    "4-Sonlandır"
    newRow +
    "Bir Seçim Yapınız";
while (true) {
    let select = Number(prompt(text));

    if(select==4)
        break;

    if (select == 1) {
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                console.log(i + "x" + j + "=" + i * j);
            }
        }
    }
    if (select == 2) {
        let result = true;
        let num = prompt("Lütfen bir sayı giriniz!");
        for (let i = 2; i <= parseInt(num / 2); i++) {
            if (num % i == 0) {
                result = false;
                break;
            }
        }
        if (result)
            alert(num + " : Asaldır.")
        else
            alert(num + " : Asal Değildir.")
    }
    
    if (select == 3) {
        let num = Number(prompt("Lütfen Bir Sayı Giriniz!"));
        let fact = 1;
        for (let i = num; i >= 1; i--) {
            fact = i * fact;
        }

        alert("Faktöriyel Sonucu : " + fact);

    }
}

