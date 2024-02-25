const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput") ;
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searcButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click", clear);
}

console.log(imageListWrapper.children);

function clear(e){
    searchInput.value = "";
    imageListWrapper.innerHTML ="";
}

function search(e){
    imageListWrapper.innerHTML ="";
    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method : "GET",
        headers : {
            Authorization: "Client-ID YbRAyLSOnEcFj7rgbRqdFV3Y3FmEOxRwIgQKoBJCvH4"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((image) => {
            adImageToUI(image.urls.small)
        })
    })
    .catch((err) => console.log(err))

    e.preventDefault()
}

function adImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height = "400";
    img.width = "400";

    div.appendChild(img);
    imageListWrapper.appendChild(div);
}