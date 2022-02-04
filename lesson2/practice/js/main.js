// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt('Enter first number');
// let number2 = +prompt('Enter second number');

// {
//    (number1 === number2) ? document.write(`<h1>${number1} = ${number2}</h1>`): (number1 > number2) ? document.write(`<h1>${number1}</h1>`) : document.write(`<h1>${number2}</h1>`)
// };




//    -
//    У першому під 'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('').
// Програма повинна зазначити, в якому під 'їзді знаходиться дана квартира.

// let aptNumber = prompt('Enter yout apartment number, please')

// function entrance(num) {
//    if (num <= 20) {
//       console.log('First entrance');
//    } else if (num <= 48) {
//       console.log('Second entrance');
//    } else if (num <= 90) {
//       console.log('Third entrance');
//    } else {
//       console.log("This apt is not exist");
//    }
// }

// entrance(aptNumber);



//    -
//    Ми маємо змінну number в яку користувач задає числове значення, якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо
// змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt("Your num"); {
//    (number === 10) ? console.log('All right'): console.log("It's wrong");
// }


//    -
//    Ми маємо змінну x в яку користувач задає значення, якщо в змінну записане число, вивести 1,
//    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об 'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує
// else

// let x = 'yuiou';

// let typeX = typeof (x);
// console.log(typeX);

// if (typeX === "number") {
//    console.log(1);
// } else if (typeX === "string") {
//    console.log(2);
// } else if (typeX === "boolean") {
//    console.log(3);
// } else if (typeX === "object") {
//    console.log(4);
// } else {
//    console.log('Smth else');
// }






//    -Задача - гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру.Якщо температура від + 10 до + 22 вивести повідомлення що ми йдемо ВЧИТИСЯ.
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = 90;

// if (temperature > 10 && temperature < 22) {
//    console.log('ми йдемо ВЧИТИСЯ');
// } else {
//    console.log('сидимо вдома і вчимося ОНЛАЙН');

// };
// //or
// {
//    (temperature > 10 && temperature < 22) ? console.log('ми йдемо ВЧИТИСЯ'): console.log('сидимо вдома і вчимося ОНЛАЙН');
// };





//    -
//    За допомогою
// switch
// case -реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз.(Авто, Мото, Телефон, і т.д) і якщо число не підходить тоді вивести Повідомлення - що число не
// вірне....

// let num = +prompt("Let's play a game, enter number");
// // debugger;
// let card = document.getElementById("card");

// switch (num) {
//    case 1:
//       card.classList.add("card");
//       document.querySelector(".card").append('You win a car');
//       break;
//    case 2:
//       card.classList.add("card");
//       document.querySelector(".card").append('You win an apartment');
//       break;
//    case 3:
//       card.classList.add("card");
//       document.querySelector(".card").append('You win a phone');
//       break;
//    case 4:
//       card.classList.add("card");
//       document.querySelector(".card").append('You win a desktop');
//       break;
//    case 5:
//       card.classList.add("card");
//       document.querySelector(".card").append('You win a dinner in restaurant');
//       break;
//    default:
//       card.classList.add("card");
//       document.querySelector(".card").append('Wrong number');
// };