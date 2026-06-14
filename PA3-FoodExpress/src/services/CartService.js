class CartService {

    constructor() {
        this.cart = [];
    }

    addProduct(product) {

        const existingProduct =
            this.cart.find(
                item => item.id === product.id
            );

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            this.cart.push({
                ...product,
                quantity: 1
            });

        }

        return this.cart;
    }

    removeProduct(id) {

        const product =
            this.cart.find(
                item => item.id === id
            );

        if (!product) return this.cart;

        if (product.quantity > 1) {

            product.quantity--;

        } else {

            this.cart = this.cart.filter(
                item => item.id !== id
            );

        }

        return this.cart;

    }

    clearCart() {

        this.cart = [];

        return this.cart;
    }

    getCart() {

        return this.cart;

    }

    calculateSubtotal() {

        return this.cart.reduce(

            (total, item) =>

                total +
                item.price * item.quantity,

            0

        );

    }

    calculateIGV() {

        return this.calculateSubtotal() * 0.18;

    }

    calculateTotal() {

        return this.calculateSubtotal()
            + this.calculateIGV();

    }

    clearCart() {

        this.cart = [];

        return this.cart;

    }

}

export default new CartService();