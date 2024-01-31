// Değişken Tanımlamaları
/* ----------------->   
    var
    let
    const
*/

// var : blok scope icinde dahi olsa function scopedan da erisilebilir. Ramda cok fazla yer kaplar.

function toplaVeCarp(num1,num2,num3)
{
    if(true)
    {
        var result = num1 + num2;
        var result = num3*(num1+num2) // Burda var ile aynı degiskeni tanimlayabiliriz. let/const da bunu yapamayiz.
    }
    console.log(result); // blok scope dısından var degiskenlerine erisebiliriz. let/const da bunu yapamayiz.
}

toplaVeCarp(3,5,2);


const pi = 3.14;
// pi = 5; // const ifadeyi sonradan tekrar degistiremeyiz. var/let de degistirebiliriz.

const user = {
    username: "Furkan",
    password: "123123"
};

user.password = "asdasd"; // bu yöntem ile const bir obje de olsa user objesinin icindeki degerler degistirilebilir.
console.log(user);