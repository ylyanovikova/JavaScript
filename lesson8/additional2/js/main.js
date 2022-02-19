// function UsersBase() {
//    let users = [{
//          name: 'vasya',
//          age: 31,
//          status: false
//       },
//       {
//          name: 'petya',
//          age: 30,
//          status: true
//       },
//       {
//          name: 'kolya',
//          age: 29,
//          status: true
//       },
//       {
//          name: 'olya',
//          age: 28,
//          status: false
//       },
//       {
//          name: 'max',
//          age: 30,
//          status: true
//       },
//       {
//          name: 'anya',
//          age: 31,
//          status: false
//       },
//       {
//          name: 'oleg',
//          age: 28,
//          status: false
//       },
//       {
//          name: 'andrey',
//          age: 29,
//          status: true
//       },
//       {
//          name: 'masha',
//          age: 30,
//          status: true
//       },
//       {
//          name: 'olya',
//          age: 31,
//          status: false
//       },
//       {
//          name: 'max',
//          age: 31,
//          status: true
//       },
//    ];

//    return {
//       addUser: (user) => {
//          if (user.name && user.age && typeof user.status === 'boolean') {
//             users.push(user);
//             console.log(user);
//          } else {
//             console.log("Fill all fields");
//          }
//       },
//       getUserStatusTrue: () => users.filter(user => user.status),
//       getUsersByAge: (age) => users.filter(user => user.age === age),
//       sortUsersByAge: (ascDesc) => {
//          if (ascDesc === 'asc') {
//             users.sort((current, next) => {
//                return current.age - next.age;
//             })
//          }
//          if (ascDesc === 'desc') {
//             users.sort((current, next) => {
//                return next.age - current.age;
//             })
//          }
//          return users;
//       },
//       getStatus: (trueFalse) => {
//          if (trueFalse === 'true') {
//             return users.filter(user => user.status);
//          } else if (trueFalse === 'false') {
//             return users.filter(user => !user.status);
//          }
//       },
//       getUserByName: (userName) => {
//          return users.filter(user => user.name === userName);
//       }
//    }
// };

// let data = UsersBase();
// let user = data.addUser({
//    name: 'Yuliia',
//    age: 25,
//    status: false
// });
// console.log(data.getUserStatusTrue());
// console.log(data.getUsersByAge(31));
// console.log(data.sortUsersByAge("asc"));
// console.log(data.getStatus('false'));
// console.log(data.getUserByName('Yuliia'));