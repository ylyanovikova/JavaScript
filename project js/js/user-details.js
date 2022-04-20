// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get("data"));
let mainContainer = document.getElementsByClassName('mainContainer')[0];

let userCard = document.createElement("div");
userCard.classList.add("userCard");
userCard.innerHTML = `<h3> ${user.id}</h3> <h2>${user.username}</h2>  <br>Name: ${user.name}
    <br>Email: ${user.email}
    <br>Phone: ${user.phone}
    <br>Website: ${user.website}
    <b>Address:</b>  ${user.address.city} city, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode} <br>${user.address.geo.lat} ${user.address.geo.lng}
    <b>Company:</b>
    ${user.company.name}
    <br>${user.company.catchPhrase}
    <br>${user.company.bs}`;

let postsBtn = document.createElement('button');
postsBtn.innerText = "Posts of current user";
postsBtn.classList.add('postsBtn');

postsBtn.onclick = function(){
    let postsBlock = document.createElement('ul');
    postsBlock.classList.add("postsBlock");
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let postBlock = document.createElement("li");
            postBlock.innerHTML = `${post.title} <br>`;
            postBlock.classList.add("postBlock");
            
            let postDetailsButton = document.createElement('button');
            postDetailsButton.innerText = "Show post details";
            postDetailsButton.classList.add("postDetailsBtn");
            postDetailsButton.onclick = function(){
                location.href = `post-details.html?post=${JSON.stringify(post)}`;
                this.disabled = 'true';
            }
            postBlock.appendChild(postDetailsButton);
            postsBlock.appendChild(postBlock);
            mainContainer.appendChild(postsBlock);
            this.disabled = 'true';
        }
    });
}

mainContainer.append(userCard, postsBtn);

let backBtn = document.getElementById('back');
backBtn.onclick = ()=>{
    location.href = "./index.html";
};