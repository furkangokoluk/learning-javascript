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