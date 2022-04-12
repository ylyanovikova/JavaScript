let favDiv = document.getElementById('favDiv');
console.log(favDiv);

let favJSON = localStorage.getItem("favourites");
let favourites = JSON.parse(favJSON);

for (const user of favourites){
    let userBlock = document.createElement('div');
    userBlock.innerHTML = `<b>name:</b> ${user.name} <b>age:</b> ${user.age} <b>status:</b> ${user.status} <br>`;
    userBlock.style.margin = '20px';
    document.body.appendChild(userBlock);
};

let firstPageAnchor = document.createElement('a');
firstPageAnchor.href = 'index.html';
firstPageAnchor.innerHTML = 'Go back';
document.body.appendChild(firstPageAnchor);


