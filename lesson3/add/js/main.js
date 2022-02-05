// 1. Створити пустий масив та:
// let arr = [];
//    a.заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//    if (i % 2 === 0) {
//       arr.push(i)
//    }

// }
// console.log(arr);

// b.заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//    if (i % 2 !== 0) {
//       arr.push(i)
//    }
// }
// console.log(arr);


// c.Заповнити масив 20 ма рандомними числами.(Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//    arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr);


// d.Заповнити масив 20 ма рандомними чисалами в діапазоні від 8 до 732(Google: Generate random number JS)
// for (let i = 0; i < 100; i++) {
//    let number = Math.floor(Math.random() * 1000);
//    if (number >= 8 && number <= 732 && arr.length < 20) {
//       arr.push(number)
//    }
// }
// console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен
// let arr = [];
// for (let i = 0; i < 100; i++) {
//    let number = Math.floor(Math.random() * 1000);
//    if (number >= 8 && number <= 732 && arr.length < 20) {
//       arr.push(number)
//    }
// }
// console.log(arr);

// for (let i = 2; i < arr.length; i += 3) {
//    console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];
// for (let i = 0; i < 100; i++) {
//    let number = Math.floor(Math.random() * 1000);
//    if (number >= 8 && number <= 732 && arr.length < 20) {
//       arr.push(number)
//    }
// }
// console.log(arr);
// for (let i = 2; i < arr.length; i += 3) {
//    if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//    }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// for (let i = 0; i < 100; i++) {
//    let number = Math.floor(Math.random() * 1000);
//    if (number >= 8 && number <= 732 && arr.length < 20) {
//       arr.push(number)
//    }
// }
// console.log(arr);
// let arr2 = [];
// for (let i = 2; i < arr.length; i += 3) {

//    if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//       arr2.push(arr[i])
//    }
// }
// console.log(arr2);



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] - > Має бути виведено 1, 9, 56
// let arr = [];
// for (let i = 0; i < 100; i++) {
//    let number = Math.floor(Math.random() * 1000);
//    if (number >= 8 && number <= 732 && arr.length < 20) {
//       arr.push(number)
//    }
// }
// for (let index = 0; index < arr.length; index++) {
//    if (arr[index] % 2 === 0) {
//       console.log(arr[index - 1]);
//    }
// }

// 6. Є масив з числами[100, 250, 50, 168, 120, 345, 188], Які характеризують вартість окремої покупки.Обрахувати середній чек.
// let prices = [100, 250, 50, 168, 120, 345, 188];

// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// let averageCheck = prices.reduce(reducer) / prices.length;
// console.log(Math.round(averageCheck));


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [230, 7, 9, 76, 54, 67, 4];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//    arr2.push(arr[i] * 5)
// }
// console.log(arr2);


// 8. Створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = ['67', 5, true, 8, 92, 95];
// let numbers = [];
// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] === 'number') {
//       numbers.push(arr[i])
//    }
// }
// console.log(numbers);


//    -
//    Дано 2 масиви з рівною кількістю об 'єктів.
// Масиви:
// let usersWithId = [{
//       id: 1,
//       name: 'vasya',
//       age: 31,
//       status: false
//    },
//    {
//       id: 2,
//       name: 'petya',
//       age: 30,
//       status: true
//    },
//    {
//       id: 3,
//       name: 'kolya',
//       age: 29,
//       status: true
//    },
//    {
//       id: 4,
//       name: 'olya',
//       age: 28,
//       status: false
//    }
// ];

// let citiesWithId = [{
//       user_id: 3,
//       country: 'USA',
//       city: 'Portland'
//    },
//    {
//       user_id: 1,
//       country: 'Ukraine',
//       city: 'Ternopil'
//    },
//    {
//       user_id: 2,
//       country: 'Poland',
//       city: 'Krakow'
//    },
//    {
//       user_id: 4,
//       country: 'USA',
//       city: 'Miami'
//    }
// ];

// З 'єднати в один об'
// єкт користувача та місто з відповідними "id"
// та "user_id".
// Записати цей об 'єкт в новий масив
// Example:
//    let usersWithCities = [{
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                user_id: 1, // <===
//                country: 'Ukraine',
//                city: 'Ternopil'
//             }
//          },
//       ]

// let usersWithCities = [];

// for (const user of usersWithId) {
//    for (const city of citiesWithId) {
//       if (user.id === city.user_id) {
//          user.adress = city;
//       }
//    }
// }
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);




//       -
//       Взяти масив з 10 чисел або створити його.Створити 2 й порожній масив.За допомогою будь - якого циклу скопіювати значення одного масиву в інший.
// let numbers = [45, 78, 9, 5, 87, 34, 5, 9, 3, 1];
// let newNums = [];


// for (const number of numbers) {
//    newNums.push(number);
// }

// console.log(newNums);