// -створити функцію яка приймає три числа та виводить найменьше.(Без Math.min!) -
// function min(a, b, c) {
//    if (a < b && a < c) {
//       console.log(a);
//    } else if (b < c && b < a) {
//       console.log(b);
//    } else if (c < a && c < b) {
//       console.log(c);
//    } else {
//       console.log('Please, enter different numbers');
//    }
// };

// min(0, 0, 9);
// min(4, 7, 9);




//    створити функцію яка приймає три числа та виводить найбільше.(Без Math.max!) -
// function max(a, b, c) {
//    if (a > b && a > c) {
//       console.log(a);
//    } else if (b > c && b > a) {
//       console.log(b);
//    } else if (c > a && c > b) {
//       console.log(c);
//    } else {
//       console.log('Please, enter different numbers');
//    }
// };

// max(0, 70, 9);
// max(-4, 87, 39);



//    створити функцію яка повертає найбільше число з масиву -
// function maxOfArray(array) {
//    let max = Math.max(...array);
//    return max;
// }

// let nums = [6, 90, 777, 4, 6, 3, 90, 56];
// console.log(maxOfArray(nums));




//    створити функцію яка повертає найменьше число з масиву -
// function minOfArray(array) {
//    let min = Math.min(...array);
//    return min;
// }

// let nums = [6, 90, 777, 4, 6, 3, -90, 56];
// console.log(minOfArray(nums));



//    створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.Приклад[1, 2, 10] - > 13 -
// function sum(array) {
//    let sum = 0;
//    for (let index = 0; index < array.length; index++) {
//       sum += array[index];
//    }
//    return sum;
// }
// let nums = [6, 90, 777, 4, 6, 3, -90, 56];

// console.log(sum(nums));


// //or

// function sum2(...array) {
//    let sum = 0;
//    for (const num of array) {
//       sum += num;
//    }
//    return sum;
// }


// console.log(sum2(6, 90, 777, 4, 6, 3, -90, 56));


//    створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. -
// function sum3(...array) {
//    let sum = 0;
//    for (const num of array) {
//       sum += num;
//    }
//    return sum / array.length;
// }
// console.log(sum3(6, 90, 777, 4, 6, 3, -90, 56));

// //or

// function sum4(array) {
//    let sum = 0;
//    for (let index = 0; index < array.length; index++) {
//       sum += array[index];
//    }
//    return sum / array.length;
// }
// let nums = [6, 90, 777, 4, 6, 3, -90, 56];

// console.log(sum4(nums));



//    створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше(Math використовувати заборонено);
// function minMax(numbers) {
//    let min = arguments[0];
//    let max = arguments[0];

//    for (const argument of arguments) {
//       if (argument > max) {
//          max = argument;
//       }
//       if (argument < min) {
//          min = argument;
//       }
//    }
//    console.log(`Max number is ${max}`);
//    return min;

// };

// document.write(`<p>Min number is ${minMax(8, 8, -9, 90, 45)}</p>`);



// створити функцію яка заповнює масив рандомними числами
//    (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random() * 100)) та виводить його. -

// function randomArray(arrLength) {
//    let arr = [];
//    for (let i = 0; i < arrLength; i++) {
//       arr.push(Math.round(Math.random() * 100));
//    }

//    console.log(arr);
// }
// randomArray(80); ////виводить цілий масив





////виводить кожне число
// function randomArray2(arrLength) {
//    let arr = [];
//    for (let i = 0; i < arrLength; i++) {
//       arr.push(Math.round(Math.random() * 100));
//       console.log([i + 1] + ':' + arr[i]);
//    }
// }
// randomArray2(80);




//    створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.limit - аргумент, який характеризує кінцеве значення діапазону. -





//    Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1, 2, 3] - > [3, 2, 1].