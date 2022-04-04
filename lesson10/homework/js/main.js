// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.getElementById('text');


// let btn = document.createElement('button');
// btn.innerText = 'hide text';
// let blockDiv = document.getElementsByClassName('textBtnBlock')[0];
// blockDiv.append(btn);


// btn.onclick = ()=>{
//     div.style.display = 'none';
// };

//or

// btn.onclick = (e)=>{
//     div.classList.toggle("hidden");
//     e.target.innerText = 'open more';
//     if (!div.classList.contains('hidden')){
//         e.target.innerText = 'hide text';
//     }
    
// };



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'hide me';
// button.style.margin= '40px';
// button.onclick = ()=>{
//     button.style.display = 'none';
// };






// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let submitBtn = document.getElementsByTagName("button")[0];
// let ageInput = document.getElementsByTagName("input")[0];
// console.log(ageInput);

// submitBtn.onclick = (e) =>{
//     e.preventDefault();
//     if(ageInput.value >= 18){
//         console.log("Your age was successfully submited");
//     } else if (ageInput.value < 18){
//         console.log("You're so young");
//     }
// };






// - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.getElementsByClassName
// ("menu")[0];
// let menuItem = document.getElementsByClassName('menuDiv')[0];
// menu.onclick= ()=>{
//     menuItem.classList.toggle('active');

// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem lorem ipsum', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem lorem ips', body:'lorem ipsum sit ameti'},
//     {title : 'lorem ', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem ipsum', body:'lorem ipsum  ameti'},
//     {title : 'lorem lorem ipsum', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem loripsum', body:'lor ipsum do'},
//     {title : 'lorem lom', body:'lorem ipsum dolo sit ameti'},  
// ];

// for (const comment of comments) {
//     let commentDiv = document.createElement('div');
//     commentDiv.style.margin = '10px';
//     let title = document.createElement('div');
//     let body = document.createElement('div');
//     let button = document.createElement('button');
//     title.innerHTML = `<b>${comment.title}</b>`;
//     body.innerHTML = `${comment.body}`
//     button.innerText = "hide";
//     commentDiv.append(title, body, button);
//     document.body.appendChild(commentDiv);
//     button.onclick = ()=>{
//         body.style.display = 'none';
//     };
// };



