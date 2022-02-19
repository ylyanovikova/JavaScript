// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який:
//    a) додає клас з назвою групи, елементу з ід main_header
// let element = document.getElementById('main_header');
// console.log(element);
// element.classList.add('group-name');



// b) робить шириниу елементу ul 400 px
// let ul = document.getElementsByTagName('ul');
// console.log(ul);
// for (const item of ul) {
//    item.style.width = '400px';
//    item.style.background = 'gray';
// };



// c) робить шириниу всіх елементів з класом linkList шириною 50 %
// let linkList = document.getElementsByClassName('link-list');
// for (const link of linkList) {
//    link.style.width = '50%';
//    link.style.background = 'lightblue';
// };




// d) отримує текст який зберігається в елементі з класом listElement2
// let textOfListElement2 = document.getElementsByClassName('list-element2');
// for (const element of textOfListElement2) {
//    console.log(element.textContent);
// }




// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liList = document.getElementsByTagName('li');
// for (const li of liList) {
//    li.style.background = 'gray';
// };


// f) отримує всі елементи 'a'
// та додає їм клас anchor
// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//    a.classList.add('anchor');
// };


// g) отримує всі елементи 'a'
// та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//    if (a.textContent === 'link3') {
//       a.style.fontSize = '40px';
//    }
// };



// h) отримує всі елементи 'a'
// та додає їм клас element_XXX.Де XXX - текстовий контент елементу a
// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//    let cont = a.textContent;
//    a.classList.add(`element-${cont}`);
// };


// i) отримує всі елементи 'sub-header'
// та змінює колір фону.Фон отримати з prompt()
// let subHeaderList = document.getElementsByClassName('sub-header');
// console.log(subHeaderList);

// let color = prompt();
// for (const subHeader of subHeaderList) {
//    subHeader.style.background = color;
// };




// j) отримує всі елементи 'sub-header'
// та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.Колір отримати з prompt()
// let subHeaderList = document.getElementsByClassName('sub-header');
// console.log(subHeaderList);

// let color = prompt();
// for (const subHeader of subHeaderList) {
//    if (subHeader.textContent === 'content 2 segment') {
//       subHeader.style.color = color;
//    }

// };



// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний.Текст отримати з prompt()
// let contentList = document.getElementsByClassName('content-1');
// let text = prompt();
// for (const content of contentList) {
//    content.innerText = text;
// };



// l) отримати елементи p та змінити їм padding на 20 px
// let pList = document.getElementsByTagName('p');
// for (const p of pList) {
//    p.style.padding = '20px';
// };


// m) отримати елементи з класом text2 та змінити їм текст на назву групи(mon - year.Пример sep - 2021)
// let text2List = document.getElementsByClassName('text2');
// for (const text2 of text2List) {
//    text2.innerText = 'dec-2021';
// };