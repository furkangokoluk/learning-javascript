let mesaj = 
`
Migrosa Hoşgeldiniz..
Money Kartınız var mı?
`

const products = [
    {
        productName : "Süt",
        price : 25
    },
    {
        productName : "Et",
        price : 330
    }
]

let sonuc = confirm(mesaj);
let payableAmount;

if (sonuc){
    let firstName = prompt("Adınızı giriniz :")
    let lastName = prompt("Soyadınızı giriniz :")

    const musteri1 = new Musteri(firstName,lastName,sonuc,products);

    let payableAmount = musteri1.calculate();

    alert (
        `
        Musteri Bilgileri : ${firstName} ${lastName};
        Ödenecek Tutar : ${payableAmount};
        `
    )
}else{
    const musteri = new Musteri(null,null,sonuc,products);
    payableAmount = musteri.calculate();
    alert(`Ödenecek Tutar : ${payableAmount}`)
}