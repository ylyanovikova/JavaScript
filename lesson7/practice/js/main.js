// -Створити функцію конструктор яка дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об 'єкт функції:
//    --drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//    --info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//    --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//    --changeYear(newValue) - змінює рік випуску на значення newValue
//    --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і додає його в поточний об'
// єкт car

// function Car(model, producer, yearOfManufaasture, maxSpeed, engineCapacity) {
//    this.model = model;
//    this.producer = producer;
//    this.yearOfManufaasture = yearOfManufaasture;
//    this.maxSpeed = maxSpeed;
//    this.engineCapacity = engineCapacity;
//    this.drive = function () {
//       console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//    };
//    this.info = function () {
//       document.write(`<h3>Model: ${this.model}</h3>
//       <h3>Producer: ${this.producer}</h3>
//       <h3>Year of manufacture: ${this.yearOfManufaasture}</h3>
//       <h3>Max speed: ${this.maxSpeed}</h3>
//       <h3>Engine capacity: ${this.engineCapacity}</h3>
//       <hr>`);
//    };
//    this.increaseMaxSpeed = function (newSpeed) {
//       return this.maxSpeed += newSpeed;
//    }
//    this.changeYear = function (newYear) {
//       return this.yearOfManufaasture = newYear;
//    }
//    this.addDriver = function (driver) {
//       this.driver = driver;
//    }
// };

// let car = new Car('A8', 'Audi', 2017, 242, 3.3);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// console.log(car)
// car.info();
// car.changeYear(2021);
// console.log(car);
// car.addDriver({
//    driverName: 'Yuliia',
//    age: 25
// })
// console.log(car);








//    -
//    (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//    --drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//    --info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//    --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//    --changeYear(newValue) - змінює рік випуску на значення newValue
//    --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і додає його в поточний об'
// єкт car

// class Car {
//    constructor(model, producer, yearOfManufaasture, maxSpeed, engineCapacity) {
//       this.model = model;
//       this.producer = producer;
//       this.yearOfManufaasture = yearOfManufaasture;
//       this.maxSpeed = maxSpeed;
//       this.engineCapacity = engineCapacity;
//    };
//    drive() {
//       console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//    };
//    info() {
//       document.write(`<h3>Model: ${this.model}</h3>
//        <h3>Producer: ${this.producer}</h3>
//        <h3>Year of manufacture: ${this.yearOfManufaasture}</h3>
//        <h3>Max speed: ${this.maxSpeed}</h3>
//        <h3>Engine capacity: ${this.engineCapacity}</h3>
//        <hr>`)
//    };
//    increaseMaxSpeed(newSpeed) {
//       return this.maxSpeed += newSpeed;
//    };
//    changeYear(newYear) {
//       return this.yearOfManufaasture = newYear;
//    };
//    addDriver(driver) {
//       this.driver = driver;
//    };
// };


// let car = new Car('A8', 'Audi', 2017, 242, 3.3);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// console.log(car)
// car.info();
// car.changeYear(2022);
// console.log(car);
// car.addDriver({
//    driverName: 'Yuliia',
//    age: 25
// })
// console.log(car);











//    -
//    створити класс / функцію конструктор попелюшка з полями ім 'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Cinderella(name, age, legSize) {
//    this.name = name;
//    this.age = age;
//    this.legSize = legSize;
// }

// let cinderella1 = new Cinderella('Ella', 18, 36);
// let cinderella2 = new Cinderella('Ella', 19, 37);
// let cinderella3 = new Cinderella('Ella', 28, 38);
// let cinderella4 = new Cinderella('Ella', 19, 36);
// let cinderella5 = new Cinderella('Ella', 21, 37);
// let cinderella6 = new Cinderella('Ella', 20, 35);
// let cinderella7 = new Cinderella('Ella', 24, 36);
// let cinderella8 = new Cinderella('Ella', 25, 37);
// let cinderella9 = new Cinderella('Ella', 19, 36);
// let cinderella10 = new Cinderella('Ella', 18, 38);

// let cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];



// Сторити об 'єкт класу "принц" за допомоги класу який має поля ім'
// я, вік, туфелька яку він знайшов.
// class Prince {
//    constructor(name, age, shoeSize) {
//       this.name = name;
//       this.age = age;
//       this.shoeSize = shoeSize;
//    }
// };

// let prince = new Prince('Charming', 25, 35);
// let size = prince.shoeSize;
// console.log(size);





// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const cinderella of cinderellas) {
//    for (const key in cinderella) {
//       if (key === 'legSize' && cinderella[key] === size) {
//          console.log(cinderella);
//       }
//    }
// };



// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let findCouple = cinderellas.find(cinderella => cinderella.legSize === prince.shoeSize);

// console.log(findCouple);