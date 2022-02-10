// -Дано натуральное число n.Выведите все числа от 1 до n. -
// let numbers = (n) => {
//    for (let index = 0; index < n; index++) {
//       console.log(index + 1);
//    }
// };
// numbers(9);




// Даны два целых числа A и В.Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let nums = (a, b) => {
   if (a < b) {
      for (let i = a; i <= b; i++) {
         console.log(i);
      }
   } else if (b < a) {
      for (let i = a; i >= b; i--) {
         console.log(i);
      }
   }
};

nums(45, 8);



//    -
//    функція Приймає масив та число "i", та міняє місцями об `єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let changer = (arr, i) => {
//    for (let index = 0; index < arr.length; index++) {
//       if (index === i) {
//          //              start  how much   change on
//          arr.splice(i, 2, arr[index + 1], arr[index]);
//       }
//    }
//    return arr;
// }
// let nums = [9, 8, 0, 4];
// console.log(changer(nums, 1));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let nulls = (array) => {
//    for (let i = 0; i < array.length; i++) {
//       if (array[i] === 0) {
//          array.splice(array[i], 1);
//          array.push(0);
//       }
//    };
//    return array;
// };

// let arr = [1, 0, 6, 0, 3];
// let arr2 = [0, 0, 1, 0, 2, 3, 4];
// let arr3 = [6, 7, 0, 5, 0];
// let arr4 = [0, 0, 0, 0, 9, 3, 3];
// console.log(nulls(arr));
// console.log(nulls(arr2));
// console.log(nulls(arr3));
// console.log(nulls(arr4));