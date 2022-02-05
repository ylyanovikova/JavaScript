// --створити масив з:
//    -з 5 числових значень -
//    з 5 стічкових значень -
//    з 5 значень стрічкового, числового та булевого типу -
//    та вивести його в консоль
// let numbersArr = [1, 7, 90, 67, 45];
// let stringsArr = ['lemon', 'orange', 'pineapple', 'plum', 'cherry'];
// let allTypesArr = ['milk', 34, true, 'false', 78];
// console.log(numbersArr);
// console.log(stringsArr);
// console.log(allTypesArr);




//    --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль
// let arr = [];
// arr[0] = 8;
// arr[2] = true;
// arr[3] = 'string';
// console.log(arr);



//    -
//    За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом всередині -
// for (let index = 0; index < 10; index++) {
//    document.write(`<div>index ${index +1}</div>`)
// }



//    За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині -
// for (let index = 0; index < 10; index++) {
//    document.write(`<div>index ${index}</div>`)
// }


//    За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом всередині. -
//    За допомогою циклу
// let i = 0;
// while (i < 20) {
//    document.write(`<h1>block ${i + 1}</h1>`);
//    i++;
// }

// while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//    document.write(`<h1>index: ${i}</h1>`);
//    i++;
// }


//    -
//    Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі. -
// let nums = [18, 99, 0, 5, 67, 454, 98, 3, 45, 6];
// for (const num of nums) {
//    console.log(num);
// }


//    Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі. -
// let colors = ['yellow', 'black', 'white', 'pink', 'orange', 'violet', 'red', 'blue', 'green', 'gray'];
// for (const color of colors) {
//    console.log(color);
// }


//    Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі. -
// let array = ['string', true, 78, 'books', 89, 0, false, 'false', 9, 5];
// for (const arrItem of array) {
//    console.log(arrItem);
// }

//    Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки булеві елементи
//    -
// let array = ['string', true, 78, 'books', 89, 0, false, 'false', 9, true];
// for (const arrItem of array) {
//    if (typeof (arrItem) === 'boolean') {
//       console.log(arrItem);

//    }
// };

//    Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки числові елементи
// let array = ['string', true, 78, 'books', 89, 0, false, 'false', 9, 5];
// for (const arrItem of array) {
//    if (typeof (arrItem) === 'number') {
//       console.log(arrItem);
//    }
// };

//    -
//    Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою
// if та typeof вивести тільки рядкові елементи
// let array = ['string', true, 78, 'books', 89, 0, false, 'false', 9, 5];
// for (const item of array) {
//    if (typeof (item) === 'string') {
//       console.log(item);
//    }
// };


//    -
//    Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі. -
// let array = [];
// array[0] = true;
// array[1] = 'text';
// array[2] = '67';
// array[3] = 87;
// array[4] = 99;
// array[5] = 'more text';
// array[6] = '45';
// array[7] = false;
// array[8] = true;
// array[9] = 3;

// for (const arrItem of array) {
//    console.log(arrItem);
// }



//    Створити цикл
// for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write -
// for (let i = 0; i < 10; i++) {
//    console.log(`step ${i + 1}`);
//    document.write(`<h2>step ${i + 1}</h2>`)
// }



//    Створити цикл
// for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write -

// for (let i = 0; i < 100; i++) {
//    console.log(`step ${i + 1}`);
//    document.write(`<h2>step ${i + 1}</h2>`)
// }



//    Створити цикл
// for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write -
// for (let i = 0; i < 100; i += 2) {
//    console.log(`step ${i}`);
//    document.write(`<h3>step ${i}</h3>`)
// }


//    Створити цикл
// for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write -
// for (let i = 0; i < 100; i++) {
//    if (i % 2 === 0) {
//       console.log(`step ${i}`);
//       document.write(`<h3>step ${i}</h3>`)
//    }

// }



//    Створити цикл
// for на 100 ітерацій.Вивести тільки непарні кроки.через console.log + document.write
// for (let i = 0; i < 100; i++) {
//    if (!(i % 2 === 0)) {
//       console.log(`step ${i}`);
//       document.write(`<h3>step ${i}</h3>`)
//    }

// }