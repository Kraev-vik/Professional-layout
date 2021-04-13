class ProductsList {
    constructor(container = '.products__list') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            {
                id: 1,
                title: "ellery x m'o capsule",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52
            },
            {
                id: 2,
                title: "ellery x m'o capsule",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52
            },
            {
                id: 3,
                title: "ellery x m'o capsule",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52
            },
            {
                id: 4,
                title: "ellery x m'o capsule",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52
            },
            {
                id: 5,
                title: "ellery x m'o capsule",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52
            },
            {
                id: 6,
                title: "ellery x m'o capsule",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52
            }
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.description = product.description;
    }
    render() {
        return `<li class="product__item">
                <div class="product__img">
                    <img src="img/products/${this.id}/preview.jpg" alt="${this.title}">
                    <div class="product__buy">
                        <button class="buy-btn id${this.id}"><img src="img/basket-icon.svg" alt="Cart">Add to Cart</button>
                    </div>
                </div>
                <div class="product__desc">
                    <h3 class="product__title">${this.title}</h3>
                    <p class="product__about">${this.description}</p>
                    <p class="product__price">&#36;${this.price}.00</p>
                </div>
            </li>`
    }
}

let list = new ProductsList();
list.render();
