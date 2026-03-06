/* let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhttp.send(); */

document.querySelector('#fetchBtn').addEventListener('click', e => {
    e.preventDefault();

    let id = document.querySelector('#userID').value;

    let r = fetch("https://jsonplaceholder.typicode.com/posts/1/" + id)
    .then(response => response.json()).then(data => {
        console.log(data);
        let posts = document.querySelector('#posts');
        posts.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    }).catch(error => {
        alert("An error occurred: " + error);
    });


});


