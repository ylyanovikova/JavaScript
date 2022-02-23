// Все робити за допомоги js. -
//    створити блок,

// let div = document.createElement('div');



//    -додати йому класи wrap, collapse, alpha, beta -
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// console.log(div);


//    додати стилі(довільні значення): колір фону, колір тексту, розмір тексту -
// div.style.height = '100px';
// div.style.background = 'gray';
// div.style.borderRadius = '20px';
// div.style.margin = '10px';



//    додати цей блок в body. -
// document.body.appendChild(div);


//    клонувати його повністю, та додати клон в body.
// let div2 = div.cloneNode(true);
// document.body.appendChild(div2);










//    -
//    Є масив: ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку.menu
// Завдання робити через цикли.

// let menu = document.getElementsByClassName('menu')[0];
// let menuArray = ['Main', 'Products', 'About us', 'Contacts'];
// let liList = (array, menu) => {
//    for (const arrayItem of array) {
//       let li = document.createElement('li');
//       li.innerText = `${arrayItem}`;
//       menu.append(li);
//    }
// };

// liList(menuArray, menu);







//    -
//    Є масив
// let coursesAndDurationArray = [{
//       title: 'JavaScript Complex',
//       monthDuration: 5
//    },
//    {
//       title: 'Java Complex',
//       monthDuration: 6
//    },
//    {
//       title: 'Python Complex',
//       monthDuration: 6
//    },
//    {
//       title: 'QA Complex',
//       monthDuration: 4
//    },
//    {
//       title: 'FullStack',
//       monthDuration: 7
//    },
//    {
//       title: 'Frontend',
//       monthDuration: 4
//    }
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//    let div = document.createElement('div');
//    for (const key in coursesAndDurationArrayElement) {
//       let h2 = document.createElement('h2');
//       h2.innerText = `${key}: ${coursesAndDurationArrayElement[key]}`;
//       div.append(h2);
//    };
//    document.body.appendChild(div);
//    document.body.appendChild(document.createElement('hr'));
// };








//    -
//    Є масив
// let coursesAndDurationArray = [{
//       title: 'JavaScript Complex',
//       monthDuration: 5
//    },
//    {
//       title: 'Java Complex',
//       monthDuration: 6
//    },
//    {
//       title: 'Python Complex',
//       monthDuration: 6
//    },
//    {
//       title: 'QA Complex',
//       monthDuration: 4
//    },
//    {
//       title: 'FullStack',
//       monthDuration: 7
//    },
//    {
//       title: 'Frontend',
//       monthDuration: 4
//    }
// ];


// За допомоги скріпта для кожного елементу масиву зробити < div class = 'item' > , в якому буде < h1 class = 'heading' > з title елементу, та < p class = 'description' > з monthDuration елементу.
// Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//    let div = document.createElement('div');
//    div.classList.add('item');
//    document.body.append(div);
//    let h1 = document.createElement('h1');
//    let p = document.createElement('p');
//    h1.classList.add('heading');
//    p.classList.add('description');
//    h1.innerText = `${coursesAndDurationArrayElement.title}`;
//    p.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//    div.append(h1, p);
//    document.body.appendChild(document.createElement('hr'));
// };