// -створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function argumnts(...arguments) {
//    if (arguments.length === 1) {
//       console.log(arguments[0]);
//    } else if (arguments.length === 2) {
//       console.log(arguments[0] + arguments[1]);
//    }
//    return arguments;
// };
// argumnts(9, 'yuyuu');




//    -
//    створити функцію яка приймає два масиви та скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
// EXAMPLE: [1, 2, 3, 4]
//    [2, 3, 4, 5]
// результат
//    [3, 5, 7, 9]

let arr1 = [1, 2, 3, 4];
let arr2 = [20, 30, 40, 50];


function foo(a, b) {
   newArr = [];
   for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
         if (i === j) {
            newArr.push(a[i] + b[j])
         }
      }
   }
   return newArr;
};
console.log(foo(arr1, arr2));




//    -
//    Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{
//       name: 'Dima',
//       age: 13
//    }, {
//       model: 'Camry'
//    }] === > [name, age, model]

// function keysOfObject(arrOfObj) {
//    for (const object of arrOfObj) {
//       for (const key in object) {
//          let keyOfObj = key;
//          console.log(keyOfObj);
//       }
//    }
// };


// let arr = [{
//    name: 'Dima',
//    age: 13
// }, {
//    model: 'Camry'
// }];

// keysOfObject(arr);



//    -
//    Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE: [{
//    name: 'Dima',
//    age: 13
// }, {
//    model: 'Camry'
// }] === > [Dima, 13, Camry]

// function meaningOfObject(arrOfObj) {
//    for (const object of arrOfObj) {
//       for (const key in object) {
//          let meaningOfObj = object[key];
//          console.log(meaningOfObj);
//       }
//    }
// };

// meaningOfObject(arr);