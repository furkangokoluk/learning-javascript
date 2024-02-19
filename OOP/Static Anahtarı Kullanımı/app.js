// Bir fonksiyon veya özellik static ise class'a özgüdür, değilse nesneye özgüdür!.

class Math{
    collect(a,b){
        console.log(a+b)
    }

    static subtract(a,b){
        console.log(a-b);
    }

    multiplication(a,b){
        console.log(a*b);
    }

    division(a,b){
        console.log(a/b);
    }
}

const mat1 = new Math();

mat1.collect(3,5); // static olarak tanımlanmamış fonksiyona NESNE üzerinden erişebiliriz.

//! mat1.subtract(5,3); Static olarak tanımlanmış fonksiyona NESNE üzerinden erişemeyiz. Class ismi üzerinden erişilir.

Math.subtract(7,3); //? Class ismi üzerinden erişilir.