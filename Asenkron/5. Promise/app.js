let check = true

// Asenkron yapıları sekrona çevirmek için kullanıyoruz.
// Callback lerin alternatifi.

//! Promisin yapısı :
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise Başarılı..");
        } else {
            reject("Promise Başarısız..");
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("Her Zaman Çalışır.."));

// Promise All
const p1 = Promise.resolve("1. promise başarılı..");
const p2 = Promise.resolve("2. promise başarılı..");
const p3 = new Promise((resolve, reject) => {
    resolve("3. promise başarılı..");
})

Promise.all([p1,p2,p3])
.then((res) => {
    for (let value of res){
        console.log(value);
    }
})
.catch((err) => console.log(err)) // Eğer yukarıdaki promiselerden birisi bile rejectte düşerse catch bloğu çalışacaktır.

// Promise + XMLHTTPREQUEST :
function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        }
        catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

readStudents("students.json")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


// Başka bir örnek :
function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhtr = new XMLHttpRequest();

        xhtr.addEventListener("readystatechange", () => {
            try {
                if (xhtr.readyState == 4 && xhtr.status == 200) {
                    resolve(JSON.parse(xhtr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })

        xhtr.open("GET", url);
        xhtr.send();
    })
}

function getCommentsByUserId(url) {
    return new Promise((resolve, reject) => {
        const xhtr = new XMLHttpRequest();

        xhtr.addEventListener("readystatechange", () => {
            try {
                if (xhtr.readyState == 4 && xhtr.status == 200) {
                    resolve(JSON.parse(xhtr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })

        xhtr.open("GET", url);
        xhtr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users/3")
    .then((data) => {
        console.log(data)
        return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
    })
    .then((res) => console.log(res.body))

    .catch((err) => console.log(err))