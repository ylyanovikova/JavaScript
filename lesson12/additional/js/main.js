// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// let usersDiv = document.createElement('div');
// usersDiv.innerHTML = `<h1>USERS</h1>`;

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users =>{
//     for (const user of users) {
//         let userDiv = document.createElement('div');
//         userDiv.innerHTML = `<h4>${user.id}  - ${user.name}</h4> <p>${user.email}</p>`;
//         userDiv.classList.add('user');
//         usersDiv.appendChild(userDiv);
//         let postBtn = document.createElement('button'); 
//         postBtn.innerText = 'show posts';
//         userDiv.appendChild(postBtn);

//         postBtn.onclick = ()=>{
//             let postsDiv = document.createElement('div');
//             postsDiv.innerHTML = `<h2>POSTS</h2>`;
            
//             fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(posts =>{
//                 for (const post of posts) {
//                     let postDiv = document.createElement('div');
//                     if(user.id === post.userId){
//                         postDiv.innerHTML = `User ${post.userId}: post ${post.id} - ${post.title} <h4>${post.body}</h4>`;
//                         postDiv.classList.add('post');
//                         postsDiv.appendChild(postDiv);
//                         let commentBtn = document.createElement('button');
//                         commentBtn.innerText = 'show comments';
//                         commentBtn.classList.add('commentBtn');
//                         postDiv.appendChild(commentBtn);


//                         commentBtn.onclick = ()=>{
//                             let commentsDiv = document.createElement('div');
//                             commentsDiv.innerHTML =`<h3>Comments</h3>`;
                            
//                             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                             .then(value => value.json())
//                             .then(comments =>{
//                                 for (const comment of comments) {
//                                         let commentDiv = document.createElement('div');
//                                         commentDiv.innerHTML = `post ${comment.postId} comment: ${comment.id} <p>${comment.body}</p> <h6>${comment.email} - ${comment.name}</h6>`;
//                                         commentDiv.classList.add('comment');
//                                         commentsDiv.append(commentDiv);
//                                 }
//                             })
//                             postDiv.append(commentsDiv);
//                             commentBtn.disabled = 'true';
//                         }
//                     } 
//                 }
//             })
//             userDiv.appendChild(postsDiv);
//             postBtn.disabled = 'true';
//         };

//     }
// });
// document.body.appendChild(usersDiv);