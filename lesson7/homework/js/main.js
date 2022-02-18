// -Створити функцію конструктор для об 'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//    this.id = id;
//    this.name = name;
//    this.surmame = surname;
//    this.email = email;
//    this.phone = phone;
// };

//(new Date()).getTime()

// let user1 = new User(1, 'Yuliia', 'Osadchuk', 'yn@gmail.com', +380630000000);
// let user2 = new User(2, 'Olha', 'Petrova', 'op@gmail.com', +380970000000);
// let user3 = new User(3, 'Viktoriia', 'Leskova', 'vl@ukr.net', +380938888888);
// let user4 = new User(4, 'Iryna', 'Nerodenko', 'in@ukr.net', +380509999999);
// let user5 = new User(5, 'Evheniy', 'Novikov', 'yn@gmail.com', +380637777777);
// let user6 = new User(6, 'Oleksandr', 'Beh', 'ob@ukr.net', +380976666666);
// let user7 = new User(7, 'Maxim', 'Rudenko', 'mr@gmail.com', +380665555555);
// let user8 = new User(8, 'Myroslava', 'Kotenko', 'mk@ukr.net', +380976555555);
// let user9 = new User(9, 'Kolya', 'Simonov', 'ks@mail.ru', +380934444444);
// let user10 = new User(10, 'Kateryna', 'Chepurda', 'kch@gmail.com', +380946666666);



// створити пустий масив, наповнити його 10 об 'єктами new User(....)
//let usersArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//console.log(usersArray);



//    -
//    Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об 'єкти з парними id (filter)
// let evenIdFilter = usersArray.filter((value) => {
//    if (value.id % 2 === 0) {
//       return value;
//    }
// })
// console.log(evenIdFilter);



//    -
//    Взяти масив з User[] з попереднього завдання, та відсортувати його по id.по спаданню(sort)
// let growthSort = usersArray.sort(function (current, next) {
//    return next.id - current.id;
// });
// console.log(growthSort);










//    -
//    створити класс для об 'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//    constructor(id, name, surname, email, phone, order) {
//       this.id = id;
//       this.name = name;
//       this.surname = surname;
//       this.email = email;
//       this.phone = phone;
//       this.order = order;
//    }
// };
// let client1 = new Client(1, 'Yuliia', 'Osadchuk', 'yn@gmail.com', +380630000000, ['skirt', 'jeans', 'paints', 'coat', 'joggers']);
// let client2 = new Client(2, 'Olha', 'Petrova', 'op@gmail.com', +380970000000, ['eyeshadows', 'lipstick', 'mascara', 'hightlighter']);
// let client3 = new Client(3, 'Viktoriia', 'Leskova', 'vl@ukr.net', +380938888888, ['face cream', 'fase spray']);
// let client4 = new Client(4, 'Iryna', 'Nerodenko', 'in@ukr.net', +380509999999, ['milk', 'avocado', 'fish', 'bread']);
// let client5 = new Client(5, 'Evheniy', 'Novikov', 'yn@gmail.com', +380637777777, ['phone', 'airpods']);
// let client6 = new Client(6, 'Oleksandr', 'Beh', 'ob@ukr.net', +380976666666, ['sneakers', 'socks']);
// let client7 = new Client(7, 'Maxim', 'Rudenko', 'mr@gmail.com', +380665555555, ['pen', 'pencil', 'liner', 'pen2', 'pen3', 'pen4']);
// let client8 = new Client(8, 'Myroslava', 'Kotenko', 'mk@ukr.net', +380976555555, ['lace', 'pins', 'needle', 'thread', 'textile']);
// let client9 = new Client(9, 'Kolya', 'Simonov', 'ks@mail.ru', +380934444444, ['shampoo', 'conditioner', 'hair mask', 'hair spray']);
// let client10 = new Client(10, 'Kateryna', 'Chepurda', 'kch@gmail.com', +380946666666, ['candy']);




// створити пустий масив, наповнити його 10 об 'єктами Client -
// let clientsList = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
// console.log(clientsList);
// console.log(clientsList['order']);


//    Взяти масив(Client[] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.(sort)
// let ordersLengthSort = clientsList.sort(function (current, next) {

//    return current.order.length - next.order.length;

// });
// console.log(ordersLengthSort);