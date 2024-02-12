// 10'luk Sayıyı 2'liğe Çevirme

function convertDecimalToBinary(number) {
    let binary = "";
    while (true) {
        binary += (number % 2).toString();
        number = Math.floor(number / 2);
        if (number == 1) {
            binary += 1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç : " + result);
}

function reverse(binary) {
    let reverseBinary = "";
    for (let i = binary.length - 1; i >= 0; i--) {
        reverseBinary += binary.charAt(i);
    }
    return reverseBinary;
}

convertDecimalToBinary(6);

// 2'lik Sayıdan 10'luğa Çevirme

function convertBinaryToDecimal(binary){
    let us = 0;
    let toplam = 0;
    binary.toString();
    for(let i = binary.length-1 ; i >= 0 ; i--){
        toplam += Number(binary.charAt(i)) * 2**us;
        us++;
    }
    console.log("Sunuç : " + toplam);
}

convertBinaryToDecimal("1011");