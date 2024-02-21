// Asenkron Problemi

const users = [
    {
        userId: 3,
        post: "Furkan Post 1"
    },
    {
        userId: 3,
        post: "Furkan Post 2"
    },
    {
        userId: 3,
        post: "Furkan Post 3"
    },
    {
        userId: 4,
        post: "Ali Post 1"
    },
    {
        userId: 4,
        post: "Ali Post 2"
    },
    {
        userId: 5,
        post: "Kardelen Post 1"
    },
]

function getUserId(callback) {
    setTimeout(() => {
        //Servise gidilip gerekli cevabı aldık varsayalım.
        userId = 3
        callback(userId);
    }, 1000);
}

function getPostUserById(userId, callback) {
    //Servise gidilip gerekli cevabı aldık varsayalım.
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId == userId) {
                callback(user.post);
            }
        });
    }, 500);
}

// let userId = getUserId();
// getPostUserById(userId); //! Asenkron yapıdan dolayı console da bir çıktı alamayacağız!..


//? Problemin Çözümü

getUserId((userId) => {
    getPostUserById(userId, (userPost) => {
        console.log(userPost);
    })
})