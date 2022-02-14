// -Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение', 3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//    let subString = [];
//    for (let i = 0; i < str.length; i += n) {
//       let string = str;
//       if (i === 0 && i < str.length) {
//          let slice = string.substring(i, n);
//          subString.push(slice);
//       }
//       if (i > 1 && i < str.length) {
//          let slice = string.substring(i, n + i);
//          subString.push(slice);
//       }
//    }

//    return subString.toString();
// }
// console.log(cutString('ttrtuiioyuiiuyioity', 3));
// document.writeln(cutString('наслаждение', 3));


// let string1 = string.slice(i, n);
// subString.push(string1);
// console.log(string.length);
// console.log(subString);

// subString.push()








//    -
//    Створити функцію - валідатор для адрес електронної пошти.Перевірка повинна включати в себе: данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру(some @email.com, SOME @EMAIL.COM, some @EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail @gmail.com
// someeMAIL @gmail.com
// someeMAIL @i.ua
// some.email @gmail.com

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// let validator = (email) => {
//    if (email.includes('@') && (email.indexOf('.') - email.indexOf('@')) > 2) {
//       let lowerCase = email.toLowerCase();
//       console.log(lowerCase.replaceAll(' ', ''));
//    } else {
//       console.log('Incorrect email, try again');

//    }
// };

// validator('someemail @gmail.com');
// validator('someeMAIL @gmail.com');
// validator('someeMAIL @i.ua');
// validator('some.email @gmail.com');








//    -
//    є масив
// let coursesArray = [{
//       title: 'JavaScript Complex',
//       monthDuration: 5,
//       hourDuration: 909,
//       modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//    },
//    {
//       title: 'Java Complex',
//       monthDuration: 6,
//       hourDuration: 909,
//       modules: ['html',
//          'css',
//          'js',
//          'mysql',
//          'mongodb',
//          'angular',
//          'aws',
//          'docker',
//          'git',
//          'java core',
//          'java advanced'
//       ]
//    },
//    {
//       title: 'Python Complex',
//       monthDuration: 6,
//       hourDuration: 909,
//       modules: ['html',
//          'css',
//          'js',
//          'mysql',
//          'mongodb',
//          'angular',
//          'aws',
//          'docker',
//          'python core',
//          'python advanced'
//       ]
//    },
//    {
//       title: 'QA Complex',
//       monthDuration: 4,
//       hourDuration: 909,
//       modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//    },
//    {
//       title: 'FullStack',
//       monthDuration: 7,
//       hourDuration: 909,
//       modules: ['html',
//          'css',
//          'js',
//          'mysql',
//          'mongodb',
//          'react',
//          'angular',
//          'aws',
//          'docker',
//          'git',
//          'node.js',
//          'python',
//          'java'
//       ]
//    },
//    {
//       title: 'Frontend',
//       monthDuration: 4,
//       hourDuration: 909,
//       modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//    }
// ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let sort = coursesArray.sort((a, b) => {
//    if (a.modules.length > b.modules.length) {
//       return -1;
//    }
//    if (a.modules.length < b.modules.length) {
//       return 1;
//    }
//    return 0;
// });


// console.log(sort);









//    -
//    Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";

// let count = (str, stringsearch) => {
//    let indexes = [];
//    for (let i = 0; i < str.length; i++) {
//       if (str[i] === stringsearch) {
//          indexes.push(i);
//       }
//    }
//    return indexes.length;
// }
// let symb = "о";
// console.log(count(str, symb));








//    -
//    Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => {
//    let arr = str.split(' ');
//    let count = (arr.length - n)
//    for (let i = 0; i < count; i++) {
//       arr.pop();
//    };
//    let result = arr.toString().replaceAll(',', ' ');
//    return result;
// };
// console.log(cutString(str, 5));