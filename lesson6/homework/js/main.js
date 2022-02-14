// -Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool' -
// let hello = 'hello world';
// let lorem = 'lorem ipsum';
// let js = 'javascript is cool';

// console.log(hello.length);
// console.log(lorem.length);
// console.log(js.length);



//    Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool' -
// hello = hello.toUpperCase();
// lorem = lorem.toUpperCase();
// js = js.toUpperCase();
// console.log(hello);
// console.log(lorem);
// console.log(js);


//    Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL' -
// hello = hello.toLowerCase();
// lorem = lorem.toLowerCase();
// js = js.toLowerCase();
// console.log(hello);
// console.log(lorem);
// console.log(js);














//    Є "брудна"
// стрінга  //.Почистити її від зайвих пробілів.
// let str = ' dirty string   ';

// console.log(str.trim());






//    -
//    Напишіть функцію stringToarray(str),
//    яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';

// let stringToarray = (str) => {
//    console.log(str.split(' '));
//    return str.split(' ');
// }
// stringToarray(str);
// document.writeln(str);






// -
// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substr(0, length)

// document.writeln(delete_characters(str, 7));








// -
// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире(-) між словами.При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//    let replace = str.replaceAll(' ', '-');
//    let upperCase = replace.toUpperCase();
//    return upperCase;
// }

// document.write(insert_dash(str));



// -
// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'kаждый охотник желает знать';
// let upperCase = (str) => {
//    let firstChar = str.charAt(0).toUpperCase();
//    let strNew = firstChar + str.slice(1, str.length);
//    return strNew;
// }
// console.log(upperCase(str));



//    -
//    Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'kаждый охотник желает знать';
// let capitalize = (str) => {
//    let arr = str.split(' ');
//    let arr2 = [];
//    arr.forEach(element => {
//       let firstChar = element.charAt(0).toUpperCase();
//       let newArr = firstChar + element.slice(1, element.length);
//       arr2.push(newArr);
//    });
//    let result = arr2.join(' ');
//    console.log(result);
//    return result;
// }
// capitalize(str);