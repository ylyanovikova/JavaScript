// Всі функції повинні бути описані стрілочним типом!!!!
//    -створити функцію яка обчислює та повертає площу прямокутника висотою -
// let s = (a, b) => a * b;
// console.log(s(2, 3));


//    створити функцію яка обчислює та повертає площу кола -
// let circleArea = (r) => 3.14 * Math.pow(r, 2);
// console.log(circleArea(7));



//    створити функцію яка обчислює та повертає площу циліндру -
// let cylinderArea = (r, h) => 2 * 3.14 * Math.pow(r, 2) + 2 * 3.14 * r * h;
// console.log(cylinderArea(6, 4));



//    створити функцію яка приймає масив та виводить кожен його елемент -
// let elementOfArray = (arr) => {
//    for (const item of arr) {
//       console.log(item);
//    }
// }

// let arr = [6, 8, 9, 46, 5];
// elementOfArray(arr);


//    створити функцію яка створює параграф з текстом.Текст задати через аргумент -
// let paragraph = (text) => document.write(`<p>${text}</p>`);

// paragraph('text item');


//    створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий -
// let list = (text) => {
//    document.write(`<ul>`);
//    document.write(`<li>${text}</li>`)
//    document.write(`<li>${text}</li>`)
//    document.write(`<li>${text}</li>`)
//    document.write(`</ul>`);
// };

// list('list item');

//    створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий.Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл) -
// let list2 = (text, length) => {
//    document.write(`<ul>`);
//    for (let index = 0; index < length; index++) {
//       document.write(`<li>${text} ${index+1}</li>`)
//    }
//    document.write(`</ul>`);
// }
// list2('text', 78);



//    створити функцію яка приймає масив примітивних елементів(числа, стрінги, булеві), та будує для них список
// let primitivesList = (arr) => {
//    document.write(`<ul>`);
//    for (const item of arr) {
//       document.write(`<li>${item}</li>`)
//    }
//    document.write(`</ul>`);
// };


// let array = ['text', 67, true, 'text2', 89, 0, false];
// primitivesList(array);





//    створити функцію яка приймає масив об 'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'
// єкту окремий блок.
// let objectKeys = (objsArr) => {
//    for (const obj of objsArr) {
//       document.write(`<div>`);
//       for (const key in obj) {
//          document.write(`<h3>${key}: ${obj[key]}</h3>`)
//       }
//       document.write(`</div><hr>`);
//    }
// };

// let simpsons = [{
//       name: 'Bart',
//       surname: 'Simpson',
//       age: 10
//    },
//    {
//       name: 'Homer',
//       surname: 'Simpson',
//       age: 40
//    },
//    {
//       name: 'Marge',
//       surname: 'Simpson',
//       age: 38
//    },
//    {
//       name: 'Lisa',
//       surname: 'Simpson',
//       age: 9
//    },
//    {
//       name: 'Maggie',
//       surname: 'Simpson',
//       age: 1
//    }
// ];

// objectKeys(simpsons);