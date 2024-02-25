document.querySelector("#btn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then((response) => response.json())
                .then((data) => console.log(data))
        })
});

// Async Await ile yapılışı
document.querySelector("#btn").addEventListener("click", async () => {
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await responsePost.json();

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    const comments = await responseComments.json()

    console.log(comments);
})