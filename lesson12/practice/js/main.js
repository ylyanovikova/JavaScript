// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// let postsBlock = document.createElement('div');

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(posts =>{
//         for (const post of posts) {
//             let postDiv = document.createElement('div');
//             postDiv.innerHTML = `<h3>${post.id} - ${post.title}</h3> <hr> ${post.body} <br>`;
//             postDiv.style.margin = '20px';
//             let btn = document.createElement('button');
//             btn.innerText = 'open comments';
//             btn.style.margin = '20px 0';
//             postDiv.appendChild(btn);

//             btn.onclick = ()=>{
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                  .then(response=> response.json())
//                  .then(comments =>{
//                     let commentsDiv = document.createElement('div');
//                     for (const comment of comments) {
//                         if(post.id === comment.postId){
//                         let commentDiv = document.createElement('div');
//                         commentDiv.innerText= `${comment.postId} - ${comment.body}`;
//                         commentsDiv.appendChild(commentDiv);
//                         }
//                         postDiv.appendChild(commentsDiv);
//                     }
//                 })
//             }
//             postsBlock.appendChild(postDiv);
//         }
//         document.body.appendChild(postsBlock);
// });
