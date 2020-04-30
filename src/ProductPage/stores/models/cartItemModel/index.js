import { observable, action } from 'mobx';

class CartItem {
    cartItemId
    productId
    @observable quantity

    constructor(data) {
        this.init(data);
    }


    @action.bound
    init(data) {
        this.cartItemId = data.id;
        this.productId = data.productId;
        this.quantity = data.quantity;
    }


    @action.bound
    incrementQuantity() {
        this.quantity++;
    }

}

export default CartItem;
