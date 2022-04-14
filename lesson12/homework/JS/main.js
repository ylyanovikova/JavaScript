// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let postsDiv = document.createElement('div');
// document.body.appendChild(postsDiv);
// postsDiv.classList.add('posts');


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(value => value.json())
// .then(posts =>{
//     for (const post of posts) {
//         let postDiv = document.createElement('div');
//         postDiv.innerHTML = `${post.id} - ${post.title}<hr> ${post.body} `;
//         postDiv.classList.add('post');
//         postsDiv.appendChild(postDiv);
//     }
// });




// 2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// let commentsBlock = document.createElement('div');

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response => response.json())
// .then(comments=>{
//     for (const comment of comments) {
//         let commentDiv = document.createElement('div');
//         commentsBlock.appendChild(commentDiv);
//         for (const key in comment) {
//             let commentElementDiv = document.createElement('div');
//             commentElementDiv.innerHTML = `<h3>${key}: ${comment[key]}</h3>`;
//             commentDiv.append(commentElementDiv);
//         }
//         commentDiv.style.padding = "20px";   
//     }
//     document.body.appendChild(commentsBlock);
// });