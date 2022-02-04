// -Нам дано масив друзів
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3 - х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//    document.write('It is a big array with 3 or more elements')
// } else {
//    document.write('It is a small array with 2 or less elements')
// };



//    -
//    Маємо 3 числа і між ним нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім(більше одного, але менше за інше).Перевірити, чи знаходиться перше число між двома іншими.
// let a = 22;
// let b = 7;
// let c = 89;

// if ((a < b && b < c) || (c < b && b < a)) {
//    console.log(b);
// } else if ((b < a && a < c) || (c < a && a < b)) {
//    console.log(a);
// } else if ((a < c && c < b) || (b < c && c < a)) {
//    console.log(c);

// };




//    -
//    Перепишіть конструкцію
// if з використанням умовного оператора '?':
//    let result;
// if (a + b < 4) {
//    result = 'Мало';
// } else {
//    result = 'Багато';
// }
// let a = 2;
// let b = 7;
// let result;

// {
//    ((a + b) < 4) ? result = 'Мало': result = 'Багато';
// }
// console.log(result);



// -
// Маємо будь яке число від - 100, 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let num = 0;

// {
//    (num < 0) ? console.log('negative'): (num > 0) ? console.log('positive') : console.log('num is 0');

// }