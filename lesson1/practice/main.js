// 1. Створити масив з 10 чисел(можна використовувати Math.random Та Math.floor).Скласти результат цих чисел в змінній result.
// let numbers = [30, 5, 7, 67, 445, 90, 3, 1, 69, 34];

// function sum(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//    }
//    console.log(sum);
// }

// sum(numbers);



// 2. Створити об 'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//    name: 'Arch of Triumph',
//    pages: 450,
//    genre: 'war novel'
// }

// 3. Створити об 'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book2 = {
//    name: '1985',
//    pages: 300,
//    genre: 'dystopia',
//    author: 'George Orwell'
// }


// 4. Створити масив об 'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'
// єкт
// let books = [{
//       name: '1985',
//       pages: 300,
//       genre: 'dystopia',
//       author: 'George Orwell'
//    },
//    {
//       name: 'Arch of Triumph',
//       pages: 450,
//       genre: 'war novel',
//       author: 'Erich Maria Remarque'
//    },
//    {
//       name: 'Pride and Prejudice',
//       pages: 237,
//       genre: 'novel',
//       author: 'Jane Austen'
//    }
// ]
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);


// 5. Напишіть код, який вираховує площу прямокутника висотою 23 см.(змінна height) та шириною 10 см(змінна width).
// Значення площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s + 'sm');

// //or
// function triangle(h, w) {
//    let s = h * w;
//    console.log(s + 'sm');
// }
// triangle(height, width);




// 6. Напиши код, який знаходить об 'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// let heightC = 10;
// let dC = 4;
// const v = heightC * dC;
// console.log(v + 'm');
// //or
// function V(h, d) {
//    console.log(h * d + 'm')
// }
// V(heightC, dC);



// 7. У прямокутного трикутника дві сторони n(зі значенням 3) та m(зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора(потрібно використовувати функцію Math.pow(число, ступінь) або оператор зведення в ступінь ** ).
// let n = 3;
// let m = 4;
// const k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
// console.log(k);