//  -Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//     (в першу, другу, третю или четверту частину години).
// let time = Math.round(Math.random() * 60);
// console.log(time);

// function partOfClock(time) {
//    if (time <= 15) {
//       console.log('First part of clock');
//    } else if (time <= 30) {
//       console.log('Second part of clock');
//    } else if (time <= 45) {
//       console.log('Third part of clock');
//    } else if (time <= 59) {
//       console.log('Fourth part of clock');
//    } else {
//       console.log('Smth going wrong');
//    }
// };
// partOfClock(time);
// //or
// {
//    (time <= 15) ? console.log('First part of clock'): (time <= 30) ? console.log('Second part of clock') : (time <= 45) ? console.log('Third part of clock') : console.log('Fourth part of clock');
// }



//     -
//     У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число(у першу, другу чи третю).
// let day = Math.ceil(Math.random() * 31);
// console.log(day);

// function partOfMonth(d) {
//    (d <= 10) ? console.log(`${d} it's the first decade of the month`): (d <= 20) ? console.log(`${d} it's the second decade of the month`) : console.log(`${d} it's the third decade of the month`)

// }

// partOfMonth(day);




//     -
//     У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//  Перевірте роботу скрипта при test, що дорівнює true, false.Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test;
// test = true; {

//    if (test === true) {
//       console.log('All right');
//    } else if (test === false) {
//       console.log('Smth wrong');
//    }
// }

// //or
// {
//    (test === true) ? console.log('All right'): console.log('Smth wrong')
// }

// //or2

// {
//    (test !== true) ? console.log('Smth wrong'): console.log('All right')
// }



//     -
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.Перевірте скрипт при a, що дорівнює 1, 0, -3
// let a;
// a = -3;

// {
//    (a !== 0) ? console.log('Okay'): console.log('a = 0');

// }


//     -
//     Скласти розклад на тиждень за домопоги
//  switch.Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// function daySchedule(weekDayNumber) {
//    switch (weekDayNumber) {
//       case 1:
//          document.write(`<div><h1>It's Monday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>Work</li>
//             <li>Cooking</li>
//             <li>Book a table in the restaurant</li>
//             </ul>
//          </div>`);
//          break;
//       case 2:
//          document.write(`<div><h1>It's Tuesday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>Study</li>
//             <li>Rest</li>
//             <li>Reading a book</li>
//             </ul>
//          </div>`);
//          break;
//       case 3:
//          document.write(`<div><h1>It's Wednesday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>Study</li>
//             <li>Lection</li>
//             <li>Reading a book</li>
//             </ul>
//          </div>`);
//          break;
//       case 4:
//          document.write(`<div><h1>It's Thursday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>Study</li>
//             <li>HW</li>
//             <li>Practice</li>
//             </ul>
//          </div>`);
//          break;
//       case 5:
//          document.write(`<div><h1>It's Friday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>Study</li>
//             <li>Work</li>
//             <li>Reading a book</li>
//             </ul>
//          </div>`);
//          break;
//       case 6:
//          document.write(`<div><h1>It's Saturday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>English</li>
//             <li>Lection</li>
//             <li>Reading a book</li>
//             </ul>
//          </div>`);
//          break;
//       case 7:
//          document.write(`<div><h1>It's Sunday</h1></div>
//          <div><h2>Your todo list:</h2></div>
//             <div><ul>
//             <li>Morning exercsises</li>
//             <li>Morning routine</li>
//             <li>Study</li>
//             <li>English</li>
//             <li>Selfcare routine</li>
//             </ul>
//          </div>`);
//          break;
//       default:
//          console.log('SMTH WRONG');  
//    }
// }

// daySchedule(Math.ceil(Math.random() * 7));

//     -
//     Потрібно визначити Високосний рік чи ні.Високосні роки діляться націло на 4.
// let year;
// year = 226;
// if (year % 4 === 0) {
//    console.log('Високосний');
// } else {
//    console.log('Не високосний');
// }
// //or
// switch (year % 4 === 0) {
//    case true:
//       console.log('Високосний');
//       break;
//    case false:
//       console.log('Не високосний');
//       break;
//    default:
//       console.log('SMTH WRONG'); 
// }
// //or
// {
//    (year % 4 === 0) ? console.log('Високосний'): console.log('Не високосний');
// }


//     -
//     Використовуючи конструкцію
//  if..else, напишіть код, який запитуватиме: „Яка« офіційна» назва JavaScript ? “
//     Якщо користувач вводить« ECMAScript», то показати : «Правильно!», інакше– відобразити: «Не знаєте ? ECMAScript!

// let question = prompt("Яка« офіційна» назва JavaScript ?");
// if (question === 'ECMAScript') {
//    document.write(`<h1>«Правильно!»</h1>`)
// } else {
//    document.write(`<h1>«Не знаєте ? ECMAScript!</h1>`)
// }