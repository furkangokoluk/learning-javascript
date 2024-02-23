//GET İsteği

function getStudents(url) {
    fetch(url).then((response) => {
        return response.json();
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getStudents("students.json");


function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users");

// POST isteği

function saveStudent() {
    fetch("https://jsonplaceholder.typicode.com/users"), {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body : JSON.stringify(data),
    }
}
