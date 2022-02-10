// Всі функції повинні бути описані стрілочним типом!!!!
//    -створити функцію яка приймає три числа та виводить найменьше.(Без Math.min!) -
// let min = (a, b, c) => {
//    if (a < b && a < c) {
//       console.log(a);
//    } else if (b < a && b < c) {
//       console.log(b);
//    } else if (c < a && c < b) {
//       console.log(c);
//    }
// };

// min(5, 9, -5);




//    створити функцію яка приймає три числа та виводить найбільше.(Без Math.max!) -
// let max = (a, b, c) => {
//    if (a > b && a > c) {
//       console.log(a);
//    } else if (b > a && b > c) {
//       console.log(b);
//    } else if (c > a && c > b) {
//       console.log(c);
//    }
// };
// max(7, 9, 8);




//    створити функцію яка повертає найбільше число з масиву -
// let maxOfArray = (arr) => Math.max(...arr);

// let nums = [6, 9, 90, 76, 4];
// console.log(maxOfArray(nums));





//    створити функцію яка повертає найменьше число з масиву -
// let minOfArray = (array) => Math.min(...array);
// let nums = [6, 9, 90, 76, 4];
// console.log(minOfArray(nums));





//    створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.Приклад[1, 2, 10] - > 13 -
// let sum = (arr) => {
//    let s = 0;
//    for (let i = 0; i < arr.length; i++) {
//       s += arr[i];
//    }
//    return s;
// };
// let nums = [6, 9, 90, 76, 4];
// console.log(sum(nums));




//    створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. -
// let arithmeticMean = (arr) => {
//    let s = 0;
//    for (let i = 0; i < arr.length; i++) {
//       s += arr[i];
//    }
//    return s / arr.length;
// };
// let nums = [6, 9, 90, 76, 4];
// console.log(arithmeticMean(nums));



//    створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше(Math використовувати заборонено); -
// let minMax = (...nums) => {
//    let max = [];
//    let min = [];

//    for (let i = 0; i < nums.length; i++) {
//       if (max.length === 0) {
//          max.push(nums[0]);
//       } else if (min.length === 0) {
//          min.push(nums[0]);
//       } else if (nums[i] > max) {
//          max = nums[i];
//       } else if (nums[i] < min) {
//          min = nums[i];
//       }
//    }
//    console.log(`Max number is: ${max}`);
//    return min;
// };

// document.write(`<h1>Min number is ${minMax(5, 9, -8, 45)}</h1>`);





// створити функцію яка заповнює масив рандомними числами
//    (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random() * 100)) та виводить його. -
// let randomArray = () => {
//    let arr = [];

//    for (let index = 0; index < Math.round(Math.random() * 100); index++) {
//       arr.push(Math.round(Math.random() * 100));
//    }
//    return arr;
// };
// console.log(randomArray());






//    створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.limit - аргумент, який характеризує кінцеве значення діапазону. -
// let arrRandom = (limit) => {
//    let array = [];
//    for (let i = 0; i < limit; i++) {
//       array.push(Math.round(Math.random() * 100));
//    }
//    return array;
// };

// console.log(arrRandom(78));





//    Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1, 2, 3] - > [3, 2, 1].
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reverse = (arr) => {
//    let reverse = [];
//    for (let index = arr.length - 1; index >= 0; index--) {
//       reverse.push(arr[index]);
//    }
//    return reverse;
// };
// console.log(reverse(nums));