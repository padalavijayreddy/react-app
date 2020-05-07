import React from 'react';
import { observable, computed, action } from 'mobx';
import CartItem from '../models/cartItemModel';

class CartStore {
    @observable cartProductList;
    productStore;

    constructor(productStore) {
        this.productStore = productStore;
        this.init(productStore);
    }

    @action.bound
    init() {
        this.cartProductList = new Map();
    }


    @action.bound
    onClickAddToCart(productId) {
        if (this.cartProductList.has(productId)) {
            this.cartProductList.get(productId).incrementQuantity();
        }
        else {
            const cartObject = {
                id: Math.random().toString(),
                productId,
                quantity: 1
            };
            this.cartProductList.set(productId, new CartItem(cartObject));
        }
    }


    @action.bound
    onRemoveCartItem(productId) {
        this.cartProductList.delete(productId);
    }


    @action.bound
    clearCart() {
        this.init();
    }


    @action.bound
    getProductDetailsById(productId) {
        const { productStore: { productList } } = this;
        return productList.get(productId);
    }

    @computed
    get totalCartAmount() {
        const { getProductDetailsById } = this;
        let list = [...this.cartProductList.values()];
        if (list.length === 0) return 0;
        return list.map(cartItem => {
            const { price } = getProductDetailsById(cartItem.productId), { quantity } = cartItem;
            return price * quantity;
        }).reduce((a, b) => a + b).toFixed(2);
    }

    @computed
    get noOfProductsInCart() {
        let totalQuantity = 0;
        ([...this.cartProductList.values()].forEach((items) => (totalQuantity += items.quantity)));
        return (totalQuantity);
    }
}

export default CartStore;
