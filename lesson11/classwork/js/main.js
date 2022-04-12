
// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


for (const user of users) {
    let userBlock = document.createElement('div');
    userBlock.innerHTML = `<b>name:</b> ${user.name} <b>age:</b> ${user.age} <b>status:</b> ${user.status} <br>`;
    userBlock.style.margin = '20px';
    let btn = document.createElement('button');
    btn.style.background = 'white';
    btn.style.borderRadius = '20px';
    btn.innerText ='add to fav';
    userBlock.appendChild(btn);
    document.body.appendChild(userBlock);

    btn.onclick=()=>{
        let newFav = JSON.parse( localStorage.getItem('favourites'))|| [];
        newFav.push(user);
        localStorage.setItem('favourites', JSON.stringify(newFav));
    };
};

let favPageAnchor = document.createElement('a');
favPageAnchor.href = 'favourite-list.html';
favPageAnchor.innerHTML = 'Go to favourites';
document.body.appendChild(favPageAnchor);

