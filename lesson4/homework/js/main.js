// -створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a, b) {
//    return a * b;
// }

// console.log(s(2, 8));



//    створити функцію яка обчислює та повертає площу кола з радіусом r -
// function circleArea(r) {
//    return 3.14 * (r ** 2);
// }
// console.log(circleArea(9));





//    створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r -
// function cylinderArea(h, r) {
//    let s = (2 * 3.14 * r ** 2) + (2 * 3.14 * r * h);
//    return s;
// }

// console.log(cylinderArea(2, 3));




//    створити функцію яка приймає масив та виводить кожен його елемент -
// function arrayCounter(...arr) {
//    for (let index = 0; index < arr.length; index++) {
//       console.log(arr[index]);
//    }
// }

// arrayCounter(6, 9, 67, 5, 444);


//    створити функцію яка створює параграф з текстом.Текст задати через аргумент -
// function paragraphCreator(text) {
//    document.write(`<p>${text}</p>`)
// };

// paragraphCreator('Some text');




//    створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий -
// function unorderedList(text) {
//    document.write(`<ul>`);
//    document.write(`<li>${text}</li>`)
//    document.write(`<li>${text}</li>`)
//    document.write(`<li>${text}</li>`)
//    document.write(`</ul>`);
// };

// unorderedList('li item');





//    створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий.Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл) -
// function unorderedList2(text, liQuantity) {
//    document.write(`<ul>`)
//    for (let i = 0; i <= liQuantity; i++) {
//       document.write(`<li>${text}</li>`);
//    };
//    document.write(`</ul>`);
// };

// unorderedList2('li item', 100);



//    створити функцію яка приймає масив примітивних елементів(числа, стрінги, булеві), та будує для них список
// function list(...array) {
//    document.write(`<ul>`)
//    for (let i = 0; i < array.length; i++) {
//       document.write(`<li>${array[i]}</li>`);
//    };
//    document.write(`</ul>`);
// };
// list(true, 'string', 78, 09, 34, false);



//    створити функцію яка приймає масив об 'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'
// єкту окремий блок.
// function arrayOfObjects(array) {
//    for (const obj of array) {
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

// arrayOfObjects(simpsons);