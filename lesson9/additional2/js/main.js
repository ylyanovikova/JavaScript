    // let users = [{
    //     name: 'vasya',
    //     age: 31,
    //     status: false,
    //     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    // }, {
    //     name: 'petya',
    //     age: 30,
    //     status: true,
    //     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    // }, {
    //     name: 'kolya',
    //     age: 29,
    //     status: true,
    //     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    // }, {
    //     name: 'olya',
    //     age: 28,
    //     status: false,
    //     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    // }, {
    //     name: 'max',
    //     age: 30,
    //     status: true,
    //     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    // }, {
    //     name: 'anya',
    //     age: 31,
    //     status: false,
    //     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    // }, {
    //     name: 'oleg',
    //     age: 28,
    //     status: false,
    //     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    // }, {
    //     name: 'andrey',
    //     age: 29,
    //     status: true,
    //     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    // }, {
    //     name: 'masha',
    //     age: 30,
    //     status: true,
    //     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    // }, {
    //     name: 'olya',
    //     age: 31,
    //     status: false,
    //     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    // }, {
    //     name: 'max',
    //     age: 31,
    //     status: true,
    //     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    // }];




// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//     let usersAdresses = [];
// for (const user of users) {
//     usersAdresses.push(user.address);   
// }
//  let usersAdressesCopy = [...usersAdresses];
// console.log(usersAdresses);
// usersAdresses.push(4, 8, 0);
// console.log(usersAdresses);
// console.log(usersAdressesCopy);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const {name, age, status, address:{city, country, street, houseNumber}} of users) {
//     let userBlock = document.createElement('div');
//     userBlock.innerHTML = `<b>Name: </b><i>${name}</i> 
//     <b>age: </b><i>${age}</i>
//     <br> <b>status: </b>${status}
//     <br><b>Address: </b>
//     <br> ${city}, ${country}, ${street}, ${houseNumber}<hr>`;

//     document.body.appendChild(userBlock);
// };





// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let userBlock = document.createElement('div');
//     for (const key in user) {
//         let userElement =  document.createElement('div');
//         userElement.innerHTML = `<b>${key}: </b> ${user[key]}`;
//         if(''+user[key]==='[object Object]'){
//             userElement.innerHTML = `<b>${key}: </b>`;
//             let {city, country, street, houseNumber} = user[key];
//             userElement.innerHTML = `${city}, ${country}, ${street}, ${houseNumber}<hr>`; 
//         }
//         userBlock.append(userElement);
//     }
//     document.body.appendChild(userBlock);
// };





// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// users.forEach(user => {
//     let userBlock = document.createElement('div');
//     userBlock.style.marginBottom = '20px';
//     for (const key in user) {
//         let userElementBlock = document.createElement('div');
//         userElementBlock.innerHTML = `<strong>${key}:</strong> ${user[key]}`;
//         userBlock.appendChild(userElementBlock);
//         if(''+user[key]=== "[object Object]"){
//             userElementBlock.innerHTML = `<strong>${key}:</strong>`;
//             for (const userKey in user[key]) {
//                 let addressElementBlock = document.createElement('div');
//                 addressElementBlock.innerText = `${user[key][userKey]}`;
//                 userElementBlock.appendChild(addressElementBlock);   
//             }
//         }
//     }
//     document.body.appendChild(userBlock);
// });











// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.//document.body.prepend(ul);//insert to the start of document/
// let rulesTittleArray = document.getElementsByTagName('h2');
// console.log(rulesTittleArray);
// let ul = document.createElement('ul');
// ul.innerHTML = `<b>Содержание</b><hr>`;

// for (const ruleTittle of rulesTittleArray) {
//     let li = document.createElement('li'); 
//    li.innerText = `${ruleTittle.textContent}`;
//    ul.appendChild(li);
// };

// let contentBlock = document.getElementById('content');
// contentBlock.appendChild(ul);










// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];


// let rulesBlockCreator = (array) =>{
// let wrap = document.createElement('div');
// wrap.classList.add('wrap');
// document.body.appendChild(wrap);
// for (let i = 0; i < array.length; i++) {
//     let numberOfRule = i+1;
//     let ruleBlock = document.createElement('div');
//     ruleBlock.classList.add("rules");
//     ruleBlock.classList.add(`rule${numberOfRule}`);
//     wrap.appendChild(ruleBlock);
//     let rule = array[i];
//     let {title, body} = rule;
//     let h2 = document.createElement('h2');
//         let p = document.createElement('p');

//         h2.innerText = `${title}`;
//         p.innerText = `${body}`;

//         ruleBlock.append(h2, p);    
// }
// };

// rulesBlockCreator(rules);