// -Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let clearString = (str) => {
//    let newStr = str.replace('.', ' ')
//       .replace('-', " ")
//       .replace('_', ' ');

//    let clearName = newStr.replaceAll('.', '')
//       .replaceAll('-', '')
//       .replaceAll('_', '');

//    console.log(clearName);
// }
// clearString(n1);
// clearString(n2);
// clearString(n3);




//    -
//    створити функцію,
//    яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100. -
// let rumdomArray = (length) => {
//    let arr = [];
//    for (let i = 0; i < length; i++) {
//       let element = Math.floor(Math.random() * 101);
//       arr.push(element);
//    }
//    console.log(arr);
//    return arr;
// }
// let arr = rumdomArray(45);



//    створити(або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.Відсортувати його за допомоги sort -
// let sort = arr.sort((a, b) => a - b);
// console.log(sort);


//    створити(або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.відфільтрувати його за допомоги filter, залишивши тільки парні числа -
// let filter = arr.filter((a) => a % 2 === 0);
// console.log(filter);



//    створити масив рандомних цілих числових значень(або згенерувати, за допомоги попередньої функції).за допомоги map та колбеку перетворити всі об 'єкти в масиві на стрінгові. -
// let map = arr.map((value) => {
//    let str = value.toString();
//    return str;
// })

// console.log(map);
















//    створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11, 21, 3, 90, 8];
// let sortNums = (direction, arr) => {
//    if (direction === 'ascending') {
//       arr.sort((a, b) => a - b);
//    } else if (direction === 'descending') {
//       arr.sort((a, b) => b - a)
//    }
//    return arr;
// };

// console.log(sortNums('descending', nums));







//    -
//    є масив
// let coursesAndDurationArray = [{
//       title: 'JavaScript Complex',
//       monthDuration: 5
//    },
//    {
//       title: 'Java Complex',
//       monthDuration: 6
//    },
//    {
//       title: 'Python Complex',
//       monthDuration: 6
//    },
//    {
//       title: 'QA Complex',
//       monthDuration: 4
//    },
//    {
//       title: 'FullStack',
//       monthDuration: 7
//    },
//    {
//       title: 'Frontend',
//       monthDuration: 4
//    }
// ];
// --відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((a, b) => {
//    if (a.monthDuration > b.monthDuration) {
//       return -1;
//    }
//    if (a.monthDuration < b.monthDuration) {
//       return 1;
//    }
//    return 0;
// });
// console.log(coursesAndDurationArray);






// --відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);