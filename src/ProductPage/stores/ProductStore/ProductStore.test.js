/*
global expect
global jest
*/
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED
}
from '@ib/api-constants';
import ProductStore from '.';
import { ProductAPI } from '../../services/ProductService';
import getProductResponse from "../../fixtures/getProductResponse.json";

describe("Product Store Tests", () => {
    let productAPI;
    let productStore;

    beforeEach(() => {
        productAPI = new ProductAPI();
        productStore = new ProductStore(productAPI);
    });

    it("Should test initialising Product store", () => {
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
        expect(typeof productStore.productList).toEqual(typeof new Map());
        expect(productStore.sizeFilter).toEqual([]);
        expect(productStore.sortBy).toBe('SELECT');
        expect(productStore.searchText).toBe('');
    });

    it("Should test onChangeSearchText Function", () => {
        const searchText = "cat";
        productStore.onChangeSearchText(searchText);
        expect(productStore.searchText).toBe(searchText);
    });

    it("Should test onChangeSortBy Function", () => {
        const sortByPrice = "DESCENDING";
        productStore.onChangeSortBy(sortByPrice);
        expect(productStore.sortBy).toBe(sortByPrice);
    });

    it("should test onSelectSize Function", () => {
        const sizeFilter = ["M", "XS"];
        productStore.sizeFilter = sizeFilter;
        const newSize = "L";
        productStore.onSelectSize(newSize);
        expect(productStore.sizeFilter).toEqual(sizeFilter.concat(newSize));

        productStore.onSelectSize(newSize);
        expect(productStore.sizeFilter).toEqual(sizeFilter);
    });

    it("should test getProductList data fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductsAPI = mockProductAPI;
        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    });

    it("should test userSignInAPI success state", async() => {

        const mockLoadingPromise = new Promise(function(resolve, reject) {
            resolve(getProductResponse);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductsAPI = mockProductAPI;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
    });

    it("should test userSignInAPI failure state", async() => {

        const mockLoadingPromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductsAPI = mockProductAPI;

        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
    });

    it("Should test sortedAndFilteredProducts Function", () => {
        productStore.setProductListResponse(getProductResponse);
        expect(productStore.totalNoOfProductsDisplayed).toBe(getProductResponse.length);

        productStore.onChangeSortBy("ASCENDING");
        expect(productStore.sortedAndFilteredProducts[0].price).toBeCloseTo(692.82);

        productStore.onChangeSortBy("DESCENDING");
        expect(productStore.sortedAndFilteredProducts[0].price).toBeCloseTo(2267.06);

        //2267,845,692
        const expectedList = [
            productStore.sortedAndFilteredProducts[1]
        ];
        productStore.sizeFilter = ["XS"];
        // console.log('recieved', productStore.sortedAndFilteredProducts);
        // console.log('expected', expectedList);
        expect(productStore.sortedAndFilteredProducts).toEqual(expectedList);

    });

});
