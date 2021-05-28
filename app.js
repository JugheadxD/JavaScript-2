const products = [
    { id: 1, title: 'Notebook', price: 2000, },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
// Функция формирования верстки каждого товара
//? Добавить в выводе изображение
const renderProduct = (product, image = "https://hss-us.com/HSS/media/HSS/Theme/images/150x100.png") => {
    return `<div class="products__item">
                <img class="products__item-img" src="${image}"></img>
                <h3 class="products__item-title">${product.title}</h3>
                <p class="products__item-price">${product.price}</p>
                <button class="products__buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
