let products = document.getElementsByClassName('products')[0];

let productsArray = JSON.parse(localStorage.getItem('products')) || [];

for (let i = 0; i < productsArray.length; i++) {
    let productCard = document.createElement('div');
    productCard.classList.add('productCard')
    
    productCard.innerHTML = `<h2>${productsArray[i].productName}</h2> <p>Quantity: ${productsArray[i].quantity} pieces Price: ${productsArray[i].price} UAH</p> <img src="${productsArray[i].image}" alt="${productsArray[i].productName}">`;

    let removeProductBtn = document.createElement('button');
    removeProductBtn.innerText = 'Remove product';
    productCard.appendChild(removeProductBtn);

    removeProductBtn.onclick = function(){
        let productsArr = JSON.parse(localStorage.getItem('products'));
        let arr = productsArr.splice([i], 1);
        localStorage.setItem('products',JSON.stringify(productsArr)); 
        if(productsArr.length > 0){
            location.reload();
        };
        if(productsArr.length === 0){
            products.innerHTML = `<h2>BASKET IS CLEAR</h2>`;
        }
    };
    products.append(productCard);   
};


let buttonsContainer = document.getElementsByClassName('buttonsContainer')[0];

let clearLocalStorageBtn = document.createElement('button');
clearLocalStorageBtn.innerText = 'Clear basket';
buttonsContainer.append(clearLocalStorageBtn);

clearLocalStorageBtn.onclick = ()=>{
    products.innerHTML = `<h2>BASKET IS CLEAR </h2>`;
    localStorage.clear();
}
let backBtn = document.createElement('button');
backBtn.innerText = 'Back';
backBtn.onclick = ()=>{
    location.href = "index.html";
}
buttonsContainer.appendChild(backBtn);