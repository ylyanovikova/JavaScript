// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

//links
// "https://i.pinimg.com/originals/31/a9/09/31a909b79b374bd4688853dd2e1aa807.png"
// "https://i.pinimg.com/originals/6d/80/2f/6d802f726e6e349dae7a688e05f1f103.jpg"
// "https://i.pinimg.com/originals/03/da/49/03da49a3162a5455dbdd0995edaf1edc.jpg"
// "https://s-media-cache-ak0.pinimg.com/736x/34/87/00/34870028a524ccc443280a0621d0d5d2.jpg"
// "https://homebnc.com/homeimg/2017/12/32-vintage-kitchen-design-decor-ideas-homebnc.jpg"
// "https://secure.img1-ag.wfcdn.com/im/01940393/resize-h755-w755%5Ecompr-r85/3600/36009240/Azure+Saucer.jpg"



let productForm = document.forms.product;
let nameOfProduct = productForm.nameOfProduct;
let quantityOfProduct = productForm.quantityOfProduct;
let priceOfProduct = productForm.priceOfProduct;
let pictureOfProduct = productForm.pictureOfProduct;

productForm.onsubmit = (e)=>{
    e.preventDefault();
    let productsArray = JSON.parse(localStorage.getItem("products")) || [];
    let product = {productName: nameOfProduct.value, quantity: quantityOfProduct.value, price: priceOfProduct.value, image: pictureOfProduct.value};
    productsArray.push(product);
    localStorage.setItem("products", JSON.stringify(productsArray));
};


