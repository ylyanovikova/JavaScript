//  Створити клас або функцію конструктор, за допомоги якої можна створювати об 'єкти наступного вигляду.
//  Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об 'єктів

//  {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//        street: 'Kulas Light',
//        suite: 'Apt. 556',
//        city: 'Gwenborough',
//        zipcode: '92998-3874',
//        geo: {
//           lat: '-37.3159',
//           lng: '81.1496'
//        }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//        name: 'Romaguera-Crona',
//        catchPhrase: 'Multi-layered client-server neural-net',
//        bs: c
//     }
//  }
//id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameComp, catchPhrase, bs
// function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameComp, catchPhrase, bs) {

//    this.id = id;
//    this.name = name;
//    this.username = username;
//    this.email = email;

//    function Adress() {
//       this.street = street;
//       this.suite = suite;
//       this.city = city;
//       this.zipcode = zipcode;

//       function Geo() {
//          this.lat = lat;
//          this.lng = lng;
//       }
//       this.geo = new Geo();
//    };
//    this.adress = new Adress();
//    this.phone = phone;
//    this.website = website;

//    function Company() {
//       this.name = nameComp;
//       this.catchPhrase = catchPhrase;
//       this.bs = bs;
//    };
//    this.company = new Company();
// };

// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'c');
// console.log(user);












//  -
//  Створити функцію конструктор / клас який описує об 'єкт тегу
//  Поля:
//     -назва тегу() -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//     -
//     назву атрибуту -
//     опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//     -
//     a -
//     div -
//     h1 -
//     span -
//     input -
//     form -
//     option -
//     select
//  Приклад результуючого об 'єкту {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [{
//           titleOfAttr: 'accesskey',
//           actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//        },
//        {
//           /*some props and values*/ },
//        {
//           /*...*/ },
//        {
//           /*...*/ },
//     ]

//  }

class Tag {
   constructor(tagName, action) {
      this.tagName = tagName;
      this.action = action;
      this.attrs = [];
      this.attrsFun = function (...array) {
         if (typeof array[0] === 'string' && typeof array[1] === 'string') {
            let attr = {
               titleOfAttr: array[0],
               actionOfAttr: array[1]
            }
            this.attrs.push(attr)
         }
         if (typeof array[2] === 'string' && typeof array[3] === 'string') {
            let attr1 = {
               titleOfAttr: array[2],
               actionOfAttr: array[3]
            }
            this.attrs.push(attr1)
         }
         if (typeof array[4] === 'string' && typeof array[5] === 'string') {
            let attr2 = {
               titleOfAttr: array[4],
               actionOfAttr: array[5]
            }
            this.attrs.push(attr2)
         }
      }
   };
};



let a = new Tag('area', `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`);
a.attrsFun('accesskey', 'Переход к области с помощью комбинации клавиш', 'href', 'Задает адрес документа, на который следует перейти');
console.log(a);

let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.');
div.attrsFun('align', 'Задает выравнивание содержимого тега <div>', 'title', 'Добавляет всплывающую подсказку к содержимому');
console.log(div);


let h1 = new Tag('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня');
h1.attrsFun('align', 'Определяет выравнивание заголовка');
console.log(h1);


let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.');
span.attrsFun('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.', 'dir', 'Задает направление и отображение текста — слева направо или справа налево.', 'id', 'Указывает имя стилевого идентификатора.');
console.log(span);


let input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.');
input.attrsFun('alt', 'Альтернативный текст для кнопки с изображением.', 'checked', 'Предварительно активированный переключатель или флажок.', 'disabled', 'Блокирует доступ и изменение элемента.');
console.log(input);


let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. ');
form.attrsFun('action', 'Адрес программы или документа, который обрабатывает данные формы.', 'method', 'Метод протокола HTTP.');
console.log(form);


let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.');
option.attrsFun('label', 'Указание метки пункта списка.');
console.log(option);

let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ');
select.attrsFun('name', 'Имя элемента для отправки на сервер или обращения через скрипты.');
console.log(select);