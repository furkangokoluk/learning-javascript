// Callback : Bir fonskiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz.

function getName(callback) {
    setTimeout(() => {
        //Servisten isim getirildi varsayalım.
        console.log("Furkan");
        callback(); // getSurname fonksiyonunu temsil ediyor!.
    }, 1000);
}

function getSurname() {
    //Servisten soyisim getirildi varsayalım.
    setTimeout(() => {
        console.log("Gökoluk");
    }, 500);
}

getName(getSurname);


//? Yukarıdaki kodu aşağıda ki şekilde de yazabiliriz!.

function getName2(callback) {
    setTimeout(() => {
        let name = "Ayşe" //Servisten isim getirildi varsayalım.
        callback(name); // getSurname fonksiyonunu temsil ediyor!.
    }, 1500);
}

function getSurname2(name) {
    setTimeout(() => {
        let surName = "Semerci" //Servisten soyisim getirildi varsayalım.
        console.log(name, surName);
    }, 1000);
}

getName2(getSurname2);

//? Yukarıdaki kodda fonksiyonu başka bir fonksiyona parametre geçirirken aşağıda ki yöntemi de izleyebiliriz!.

function getName3(callback) {
    setTimeout(() => {
        let name = "Şeyma" //Servisten isim getirildi varsayalım.
        callback(name); // getSurname fonksiyonunu temsil ediyor!.
    }, 2000);
}

function getSurname3(name, callback) {
    setTimeout(() => {
        // name = .... (name'e göre servisten soyismini bulduğunu varsayalım)
        let surName = "Gökoluk" //Servisten name'soyisim getirildi varsayalım.
        callback(surName);
    }, 1500);
}

function getAge(name, surName, callback) {
    setTimeout(() => {
        // name ve surname göre servisten yaşını bulduğunu varsayalım.
        let age = 22;
        callback(age)
    }, 1000);
}

getName3((name) => {
    getSurname3(name, (surName) => {
        getAge(name, surName, (age) => {
            console.log(name, surName, age); //! Callback hell dediğimiz durum gerçekleşti ve okunabilirliği ve karmaşıklığı arttı.
        })
    })
});