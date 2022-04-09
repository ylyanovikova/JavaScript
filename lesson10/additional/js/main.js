//1 - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// function findElement(bodyElements){
//   for (const element of bodyElements) {
//       element.onclick= function(e){
//         if(e.button ===0 ){
//         let elmnt = e.target;
//         console.log(`Tag name: ${this.tagName}, Classlist:  ${elmnt.classList}, ID: ${this.id}` );
//         console.log(`Width: ${elmnt.offsetWidth}, Height:  ${elmnt.offsetHeight}`);
//         } 
//       }  
//     findElement(element.children);
//    }  
// };

// findElement(document.body.children);



//2
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// function findElement(bodyElements){
//     let popUp = document.getElementsByClassName('popUp')[0];
//     let tagNm = document.createElement('h3');
//     let classListAndIdInfo = document.createElement('h4');
//     let widthHeight = document.createElement('h3');
//     for (const element of bodyElements) {
//         element.onclick= function(e){
//             if(e.button ===0 ){
//                 let elmnt = e.target; 
//                 tagNm.innerHTML = `Tag name: ${this.tagName}<hr>`;
//                 widthHeight.innerText = `Width: ${elmnt.offsetWidth}, Height:  ${elmnt.offsetHeight}`
//                 classListAndIdInfo.innerText = `Classlist:  ${elmnt.classList}, ID: ${this.id}`;
//                 popUp.append(tagNm, classListAndIdInfo, widthHeight);
//                 popUp.classList.toggle('active');
//             } 
//         };     
//     } 
//     popUp.innerHTML = '';
// };

//  findElement(document.body.children);




//3.1

// -- взять массив пользователей
// let usersWithAddress = [
//         {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//         {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//         {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//         {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//         {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//         {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//         {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//         {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//         {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//         {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//         {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//     ];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// // Status false filter
// let checkbox1 = document.getElementsByTagName('input').checkbox1;
// let resultsDiv = document.createElement('div');
// let results =  usersWithAddress.filter(user => !user.status);

// checkbox1.onclick = () =>{
//     for (const user of results) {
//         let divStatus = document.createElement('div');
//         divStatus.innerText = `${user.name}, ${user.age}, ${user.status}, ${user.address.city}`;  
//         resultsDiv.append(divStatus);
//     };

//     if(checkbox1.checked){
//         document.body.appendChild(resultsDiv);
//     } else if(!checkbox1.checked){
//         resultsDiv.remove();
//     }
//     results = '';
// };

// // Age filter
// let checkbox2 = document.getElementsByTagName("input").checkbox2;
// let ageFilter = usersWithAddress.filter(user => user.age >=29);
// let ageFilterResultsDiv = document.createElement('div');

// checkbox2.onclick = ()=>{
//     for (const user of ageFilter) {
//         let ageResultDiv = document.createElement('div');
//         ageResultDiv.innerText = `${user.name}, ${user.age}`;
//         ageFilterResultsDiv.append(ageResultDiv);
//     }
//     if(checkbox2.checked){
//         document.body.appendChild(ageFilterResultsDiv);
        
//     } else if(!checkbox2.checked){
//         ageFilterResultsDiv.remove();
//     }
//     ageFilter = '';
// };


// // Kyiv filter
// let checkbox3 = document.getElementsByTagName('input').checkbox3;
// let kyivFilter = usersWithAddress.filter(user => user.address.city === "Kyiv");
// let kyivResultsDiv = document.createElement('div');

// checkbox3.onclick = ()=>{
//     for (const user of kyivFilter) {
//         let KyivDiv = document.createElement('div');
//         KyivDiv.innerText = `${user.name}, ${user.age}, ${user.address.city}`;
//         kyivResultsDiv.append(KyivDiv);
//     }
//     if(checkbox3.checked){
//         document.body.appendChild(kyivResultsDiv);
//     }else if(!checkbox3.checked){
//         kyivResultsDiv.remove();
//     }
//     kyivFilter = '';
// };


//the same
// let input = document.body.getElementsByTagName('input');
// let checkbox1 = input.checkbox1;
// let checkbox2 = input.checkbox2;
// let checkbox3 = input.checkbox3;

// let results = document.createElement('div');


// let checkboxOnclick= (checkbox1, checkbox2, checkbox3)=> {
//     let results = document.createElement('div');
    
//     let userDivContent =(filter)=>{
//         for (const user of filter) {
//             let userDiv = document.createElement('div');
//             userDiv.innerText = `Name: ${user.name} Age: ${user.age}  Status: ${user.status} Address: ${user.address.city} ${user.address.street}`;
//             results.append(userDiv);
//         }
//     }
//     checkbox1.onclick =()=>{
//         let checkbox1Filter = usersWithAddress.filter(user=> !user.status);
        
//         if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
//             userDivContent(checkbox1Filter); 
//             document.body.appendChild(results);
//         } else if(!checkbox1.cheked) {
//             results.innerText = '';
//             }      
//     }
//     checkbox2.onclick = ()=>{
//         let checkbox2Filter = usersWithAddress.filter(user=> user.age >= 29);
        
//         if(!checkbox1.checked && checkbox2.checked && !checkbox3.checked){
//             userDivContent(checkbox2Filter);
//             document.body.appendChild(results);
//         }else if(!checkbox2.checked){
//             results.innerText = '';
//         }
//     }

//     checkbox3.onclick = ()=>{
//         let checkbox3Filter = usersWithAddress.filter(user=> user.address.city === "Kyiv");
        
//         if(!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
//             userDivContent(checkbox3Filter);
//             document.body.appendChild(results);
//         }else if(!checkbox3.checked){
//             results.innerText = '';
//         }
//     }
    
//     checkbox1Filter = '';
//     checkbox2Filter = '';
//     checkbox3Filter = '';
// };

// checkboxOnclick(checkbox1, checkbox2, checkbox3);







//all filtres 3.2 with button

// let submitBtn = document.getElementById('submit');
// let results = document.createElement('div');

// submitBtn.onclick=()=>{
    
//     let input = document.body.getElementsByTagName('input');
//     let checkbox1 = input.checkbox1;
//     let checkbox2 = input.checkbox2;
//     let checkbox3 = input.checkbox3;

//     let userDivContent =(array)=>{
//         for (const user of array) {
//             let userDiv = document.createElement('div');
//             userDiv.innerText = `Name: ${user.name} Age: ${user.age}  Status: ${user.status} Address: ${user.address.city} ${user.address.street}`;
//             results.append(userDiv);
//         }
//     };
//     results.innerText = '';

//     //1
//     if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
//         let filter = usersWithAddress.filter(user=> !user.status);
//         userDivContent(filter);
//         document.body.appendChild(results);
//     }

//     //2
//     if (!checkbox1.checked && checkbox2.checked && !checkbox3.checked){
//         let filter2 = usersWithAddress.filter(user=>user.age>=29);
//         userDivContent(filter2);
//         document.body.appendChild(results);
//     } 

//     //3
//     if (!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
//         let filter3 = usersWithAddress.filter(user=> user.address.city === "Kyiv")
//         userDivContent(filter3)
//         document.body.appendChild(results);
//     } 

//     //1 2
//     if(checkbox1.checked && checkbox2.checked && !checkbox3.checked){
//         let filter12 = usersWithAddress.filter(user=> !user.status && user.age>=29);
//         userDivContent(filter12);
//         document.body.appendChild(results);
//     }


//     //1 3
//     if(checkbox1.checked && !checkbox2.checked && checkbox3.checked){
//         let filter13 = usersWithAddress.filter(user=> !user.status && user.address.city === "Kyiv");
//         userDivContent(filter13)
//         document.body.appendChild(results);
//     }

//     //2 3
//     if(!checkbox1.checked && checkbox2.checked && checkbox3.checked){
//         let filter23 = usersWithAddress.filter(user=> user.age >= 29 && user.address.city === "Kyiv");
//         userDivContent(filter23)
//         document.body.appendChild(results);
//     }

//     //1 2 3
//     if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
//         let filter123 = usersWithAddress.filter(user=> !user.status && user.age>=29 && user.address.city === "Kyiv");
//         userDivContent(filter123);
//         document.body.appendChild(results);
//     }
// };




















//4 +css +html
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imagesContainer = document.getElementById('imagesContainer');
// let left = document.getElementById('btnLeft');
// let right = document.getElementById('btnRight');
// let img = document.querySelectorAll("#imagesContainer img");

// let i = 0;
// let interval = setInterval(runImage, 2500);

// left.addEventListener('click', ()=>{  
//     i--;
//     resetInterval();   
//     changeImg();
// });

// right.addEventListener('click', ()=>{
//     i++;
//     resetInterval();   
//     changeImg();
// });


// let changeImg = ()=>{
//     if(i<0){
//         i= img.length -1;
//     } else if(i>4){
//         i=0;
//     }
//     imagesContainer.style.transform = `translateX(${-i * 1000}px)`;
// };

// function runImage(){
//     i++;
//     changeImg();
// };

// let resetInterval =()=>{
//     clearInterval(interval);
//     interval = setInterval(runImage, 2500);
// };













//5
//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
let div = document.getElementsByTagName('div')[0];
console.log(div);
