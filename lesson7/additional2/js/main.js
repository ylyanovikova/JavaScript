// let user1 = userCardHolder('Yuliia', 25, 1);
// let user2 = userCardHolder('Viktoriia', 24, 2);
// let user3 = userCardHolder('Iryna', 23, 3);

// function userCardHolder() {
//    let users = [{
//          key: 1,
//          balance: 100,
//          transactionLimit: 100,
//          historyLogs: [],
//       },
//       {
//          key: 2,
//          balance: 100,
//          transactionLimit: 100,
//          historyLogs: [],
//       },
//       {
//          key: 3,
//          balance: 100,
//          transactionLimit: 100,
//          historyLogs: [],
//       }
//    ];


//    return {
//       userCard: (key) => {
//          if (typeof key === 'number') {
//             console.log(userCardHolder())
//          } else {
//             console.log('I need a number');
//          }
//       },
//       getCardOptions: (key) => {
//          users.find(user => {
//             if (user.key === key) {
//                console.log(user);
//             }
//          })
//       },
//       putCredits: (num, key) => {
//          users.find(user => {
//             if (user.key === key) {
//                user.historyLogs.push({
//                   operationType: 'PutCredits',
//                   credits: num,
//                   operationTime: new Date().toDateString()
//                });
//                return user.balance += num;
//             }
//          })

//       },
//       takeCredits: (num, key) => {
//          users.find(user => {
//             if (user.key === key) {
//                if (user.balance >= num && user.transactionLimit >= num) {
//                   user.historyLogs.push({
//                      operationType: 'TakeCredits',
//                      credits: num,
//                      operationTime: new Date().toDateString()
//                   });
//                   return user.balance -= num;
//                } else {
//                   console.log('Not enough of money or increase the limit');

//                }
//             }
//          })
//       },
//       setTransactionLimit: (num, key) => {
//          users.find(user => {
//             if (key === user.key) {
//                if (typeof num === 'number') {
//                   user.historyLogs.push({
//                      operationType: 'ChangeTransactionLimit',
//                      credits: num,
//                      operationTime: new Date().toDateString()
//                   });
//                   return user.transactionLimit = num;
//                } else {
//                   console.log('Enter new limit number');
//                }
//             }
//          })
//       },
//       transferCredits: (key, num, card) => {
//          users.find(user => {
//             if (user.key === key && user.balance >= num && user.transactionLimit >= num) {
//                return user.balance -= num;
//             }
//          });
//          users.find(user => {
//             if (user.key === card) {
//                return user.balance += num;
//             }
//          })
//       }

//    }
// };
// let users = userCardHolder();
// users.userCard(4);
// users.getCardOptions(2);
// users.putCredits(200, 1);
// users.getCardOptions(1);
// users.putCredits(400, 3);
// users.getCardOptions(3);
// users.takeCredits(300, 3);
// users.getCardOptions(3);
// users.takeCredits(50, 3);
// users.getCardOptions(3);
// users.setTransactionLimit(400, 3);
// users.getCardOptions(3);
// users.transferCredits(3, 100, 2);
// users.getCardOptions(3);
// users.getCardOptions(2);