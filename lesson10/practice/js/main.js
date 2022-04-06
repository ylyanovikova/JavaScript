// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
// let button = document.getElementsByClassName('button')[0];
// console.log(form1, form2);

// button.onclick = ()=>{ 
//     console.log(`form1 input 1: ${form1.form1Input[0].value} input 2: ${form1.form1Input[1].value}`);
//     console.log(`form2 input 1: ${form2.form2Input[0].value} input 2: ${form2.form2Input[1].value}`);
// };






// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let input = document.getElementsByTagName("input");
// let numberOfStringsInput = input.numberOfStrings;
// let numberOfColumnsInput = input.numberOfColumns;
// let textInput = input.text;
// console.log(numberOfStringsInput, numberOfColumnsInput, textInput);

// let createTableBtn = document.getElementById('btn');
// console.log(createTableBtn);

// createTableBtn.onclick = ()=>{
//     let customiseTable = document.createElement("table");
//     for (let i = 0; i < numberOfStringsInput.value; i++) {
//        let row = customiseTable.insertRow();
//         for (let i = 0; i < numberOfColumnsInput.value; i++) {
//         row.insertCell().textContent = textInput.value;
//         }
//     } 
//     document.body.append(customiseTable);
// };








// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let badWordsArray = ['fuck', 'wanker', 'bastard', 'shit'];
// let input = document.getElementsByTagName('input').userText;

// let submitBtn = document.getElementsByTagName('button')[0];

// submitBtn.onclick = ()=> { 
//     let value = input.value;
//     console.log(value);
//     for (const badWord of badWordsArray) {
//         if(value === badWord){
//             alert("Don't use bad words!");
//         }
//     }
// };




// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let badWordsArray = ['fuck', 'wanker', 'bastard', 'shit'];
// let input = document.getElementsByTagName('input').userText;

// let submitBtn = document.getElementsByTagName('button')[0];

// submitBtn.onclick = ()=> { 
//     let value = input.value;
//     console.log(value);
//     for (const badWord of badWordsArray) {
//         if(value.includes(badWord)){
//             alert("Don't use bad words!");
//         }
//     }
// };
