// Spread Operatörü ...

let numbers = [10, 20, 30, 40];

const add = (a, b, c, d) => console.log(a + b + c + d);

// Eski Yöntem

add(numbers[0], numbers[1], numbers[2], numbers[3]);

// Spread Operatörü

add(...numbers);


const langs1 = ["C#", "C++"];
const langs2 = ["Java", "Php", ...langs1];

console.log(langs2);


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let [a, b, ...remainingNumbers] = number; // 3'ten 0'a kadar olan bölümü destructing ile remainingNumbers'a atadık.

console.log(a, b, remainingNumbers);


const array1 = ["Furkan", "Ali", "Veli", "Mehmet"];
let array2 = [];

array2 = [...array1]; // arrayleri kopyalama işlemi

console.log(array2);