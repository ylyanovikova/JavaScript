// let user1 = userCardHolder('Yuliia', 25, 1);
// let user2 = userCardHolder('Viktoriia', 24, 2);
// let user3 = userCardHolder('Iryna', 23, 3);

function userCardHolder(id, balance = 100, transactionLimit = 100) {
   let user = {
      balance: balance,
      transactionLimit: transactionLimit,
      historyLogs: [],
      key: id
   };

   let usersArr = [];
   let user1 = userCardHolder(1);
   let user2 = userCardHolder(2);
   let user3 = userCardHolder(3);

   usersArr.push(user1, user2, user3);
   console.log(usersArr);



   return {
      userCard: (key) => {
         if (typeof key === 'number') {
            console.log(userCardHolder())
         } else {
            console.log('I need a number');
         }
      },
      getInfo: (key) => {
         user['key'] = key;
         return user;
      },
      putCredits: (num, key) => {
         console.log(user[key]);

         if (key === user.key) {
            return balance += num;

         }

      },
   }
};
// takeCredits: (num) => {
//    if (transactionLimit < num && balance < num) {
//       console.error('Not enough of money');
//    } else {
//       return balance - num;
//    }
// }






//userCardHolder().userCard(2);

// console.log(userCardHolder().getInfo(3));
// console.log(userCardHolder().getInfo(1));
// console.log(userCardHolder().getInfo(2));
// console.log(userCardHolder().putCredits(300, 2));
// console.log(userCardHolder().getInfo(2));
userCardHolder();