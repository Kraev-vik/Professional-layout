class CartList {
    constructor(container = '.cart__list') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            {
                id: 1,
                title: "mango people<br>t-shirt",
                color: "Blue",
                size: "XL",
                quantity: 3,
                price: 300
            },
            {
                id: 3,
                title: "mango people<br>t-shirt",
                color: "BLue / Black",
                size: "L",
                quantity: 1,
                price: 300
            },
            {
                id: 7,
                title: "mango people<br>t-shirt",
                color: "Red",
                size: "M",
                quantity: 2,
                price: 300
            }
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class CartItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.color = product.color;
        this.size = product.size;
        this.quantity = product.quantity;
    }
    render() {
        return `<li class="cart__item id${this.id}">
                    <div class="cart__item-remove"><img id="${this.id}" src="./img/close.svg" alt="remove"></div>
                    <img class="cart__img" src="img/products/${this.id}/preview.jpg" alt="${this.title}">
                <div class="cart__desc">
                    <h4 class="cart__title">${this.title}</h4>
                    <ul>
                        <li>Price: <span class="cart__price">&#36;${this.price}</span></li>
                        <li>Color: ${this.color}</li>
                        <li>Size: ${this.size}</li>
                        <li>Quantity: <input type="text" name="address" placeholder="${this.quantity}"></li>
                    </ul>
                </div>
            </li>`
    }
}

let list = new CartList();
list.render();

//hiding item
const block = document.querySelectorAll('.cart__item-remove');
for (let el of block) {
    el.addEventListener("click", (e) => {
        document.querySelector(`.cart__item.id${e.target.id}`).classList.add('visually-hidden');
    });
}
//clear cart
document.querySelector('.cart__clear').addEventListener("click", () => {
    document.querySelector('.cart__list').classList.add('visually-hidden');
});