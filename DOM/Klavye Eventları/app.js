// Klavye Eventları

// keypress: Karakter(harf ve sayılar) tuşlarına basıldığında tetiklenir.
// keydown: Herhangi bir tuşa basıldığında tetiklenir.
// keyup: Bir tuş bırakıldığında tetiklenir.

// keypress
document.addEventListener("keypress", keypress);

function keypress(e){
    console.log("Keypress: "+ e.key);
};

// keydown
document.addEventListener("keydown", keydown);

function keydown(e){
    console.log("Keydown: " + e.key);
}

// keyup
document.addEventListener("keyup", keyup);

function keyup(e){
    console.log("Keyup: " + e.key)
}