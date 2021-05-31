class ProductList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    sum() {
        let totalSum = 0;
        for (let product of this.goods) {
            totalSum += product.price;
        }
        console.log(totalSum);
    }


}

class ProductItem {
    constructor(product, img = 'https://hss-us.com/HSS/media/HSS/Theme/images/150x100.png') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="products__item" data-id="${this.id}">
                        <img class="products__item-img" src="${this.img}"></img>
                        <h3 class="products__item-title">${this.title}</h3>
                        <p class="products__item-price">${this.price}</p>
                        <button class="products__buy-btn">Купить</button>
                    </div>`
    }
}

let list = new ProductList();
list.render();
list.sum();





class Cart {
    addGoods() {

    }
    removeGoods() {

    }
    render() {

    }
}


class CartItem {
    render() {

    }
}
