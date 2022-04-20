// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get("post"));

let postContainer = document.getElementsByClassName("postContainer")[0];
postContainer.innerHTML = `<h3>${post.id}</h3> 
<br><b>User id: ${post.userId}</b> <b>Title:</b> ${post.title}
<br>${post.body}`;
postContainer.style.fontSize  = "20px";
postContainer.style.padding = "50px";

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(response => response.json())
.then(comments =>{
    let commentsContainer = document.getElementsByClassName('commentsContainer')[0];
    for (const comment of comments) {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<h3>${comment.id}</h3>
        <br>Post id: ${comment.postId}
        <br>${comment.email}
        <b>${comment.name}</b>
        <p>${comment.body}</p>`;
        commentsContainer.appendChild(commentDiv);
    }
});

let backBtn = document.getElementById('back');
backBtn.onclick = ()=>{
    location.href = "./index.html";
};