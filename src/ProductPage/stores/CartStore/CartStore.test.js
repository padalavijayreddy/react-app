/*
global expect
global jest
*/

import React from 'react';
import CartStore from ".";
import ProductStore from '../ProductStore';
import { ProductAPI } from '../../services/ProductService';
import getProductResponse from "../../fixtures/getProductResponse.json";

describe("Product Store Tests", () => {
    let productStore;
    let cartStore;

    beforeEach(() => {
        productStore = new ProductStore;
        //productStore.setProductListResponse(getProductResponse);
        cartStore = new CartStore(productStore);
    });

    it("Intializing the values", () => {
        expect(typeof cartStore.cartProductList).toEqual(typeof new Map());
    });

    it("Test the clearCart Function", () => {
        const init = jest.fn();
        cartStore.init = init;
        cartStore.clearCart();
        expect(init).toBeCalled();
    });

    // it("Test the clearCart Function", () => {
    //     jest.spyOn(cartStore, 'init');
    //     cartStore.clearCart();
    //     expect(cartStore.init).toBeCalled();
    // });

    it("test onClickAddToCart Function", () => {
        cartStore.onClickAddToCart(1);
        expect(cartStore.cartProductList.has(1)).toBeTruthy();
        expect(cartStore.cartProductList.get(1).quantity).toBe(1);
        cartStore.onClickAddToCart(1);
        expect(cartStore.cartProductList.get(1).quantity).toBeGreaterThan(1);
    });

    it("test onRemoveCartItem Function", () => {
        cartStore.onClickAddToCart(1);
        expect(cartStore.cartProductList.has(1)).toBeTruthy();

        cartStore.onRemoveCartItem(1);
        expect(cartStore.cartProductList.has(1)).toBeFalsy();
    });

    it("Should test the getProductDetailsById Function", () => {
        expect(cartStore.getProductDetailsById(15)).toBeFalsy();
        expect(cartStore.getProductDetailsById(17)).toBeFalsy();
    });
});
