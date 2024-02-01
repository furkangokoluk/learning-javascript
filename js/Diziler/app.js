// Dizi Tanımlama
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let array1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
// Foreach döngüsü
let names = ["Furkan", "Ahmet", "Ali", "Yusuf", "Ayşe", "Kardelen"];
names.forEach(function (firsName) {
    console.log(firsName);
});
console.log("\r\n\r\n")

// Dizinin Metotları
/*
    push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
    unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

    pop     : dizinin sonundan eleman siler , eleman sayısını döner
    shift   : dizinin başından eleman siler , eleman sayısını döner

    splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

    toString: diziyi stringe çevirebiliriz.
    join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

    concat  : dizileri birleştirmek için kullanılır.
    slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
    length  : dizinin uzunluğunu verir.
    reverse : dizinin elemanlarını ters çevirmek
    split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
    indexOf : elemanın index numarasını verir.
    includes: verilen elemanı içeriyor mu ona bakar
*/
// Ürün arama uygulaması

let product1 = {
    name: "Acer Nitro",
    category: "Teknoloji",
    price: 12.000
}

let product2 = {
    name: "Acer Gaming",
    category: "Teknoloji",
    price: 14.000
}

let product3 = {
    name: "Lenovo Gaming",
    category: "Teknoloji",
    price: 22.000
}

let product4 = {
    name: "Lenovo İdeapad",
    category: "Teknoloji",
    price: 15.000
}

let product5 = {
    name: "Lenovo Office",
    category: "Teknoloji",
    price: 7.000
}
let product6 = {
    name: "Asus Rog",
    category: "Teknoloji",
    price: 37.000
}
let product7 = {
    name: "Asus Tuf",
    category: "Teknoloji",
    price: 29.000
}
let product8 = {
    name: "Asus ViveBook",
    category: "Teknoloji",
    price: 25.000
}

let products = [product1, product2, product3, product4, product5, product6, product7, product8];
let filterProducts = [];
let inputProductName = prompt("Aramak İstediğiniz Ürünü Giriniz..");

function getFilterProduct(products) {
    products.forEach(function (product) {
        if (product.name.toUpperCase().includes(inputProductName.toUpperCase(), 0)) {
            filterProducts.push(product);
        }
    })
}

function printFilterProduct(filterProducts) {
    filterProducts.forEach(function (product) {
        console.log("-----------------------");
        console.log("|" + product.name + "|" + product.price + "|" + product.category);
    })
}

getFilterProduct(products);
printFilterProduct(filterProducts);