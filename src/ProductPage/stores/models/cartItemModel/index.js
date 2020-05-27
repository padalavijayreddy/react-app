import { observable, action } from 'mobx';

class CartItem {
    cartItemId
    productId
    product
    @observable quantity

    constructor(data) {
        this.init(data);
    }


    @action.bound
    init(data) {
        this.cartItemId = data.id;
        this.productId = data.productId;
        this.product = data.product;
        this.quantity = data.quantity;
    }


    @action.bound
    incrementQuantity() {
        this.quantity++;
    }

}

export default CartItem;
