import { observable, action, computed } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import ProductModel from '../../stores/models/productModel';

class ProductStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    productsService
    @observable sizeFilter
    @observable sortBy
    @observable searchText

    constructor(productService) {
        this.productService = productService;
        this.init();
    }

    @action.bound
    init() {
        this.productList = new Map();
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = 'SELECT';
        this.searchText = '';
    }

    @action.bound
    onChangeSearchText = (changedText) => {
        this.searchText = changedText;
    }


    @action.bound
    getProductList() {
        const productPromise = this.productService.getProductsAPI();
        return bindPromiseWithOnSuccess(productPromise)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError);
    }


    @action.bound
    setGetProductListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus;
    }


    @action.bound
    setGetProductListAPIError(apiError) {
        this.getProductListAPIError = apiError;
    }


    @action.bound
    setProductListResponse(apiResponse) {
        apiResponse.forEach(product => this.productList.set(product.id, new ProductModel(product)));
    }


    @action.bound
    onChangeSortBy(changedFormat) {
        this.sortBy = changedFormat;
    }

    @action.bound
    onSelectSize(selectedSize) {
        const { sizeFilter } = this;
        if (sizeFilter.includes(selectedSize))
            this.sizeFilter = sizeFilter.filter(eachSize => eachSize !== selectedSize);
        else this.sizeFilter = sizeFilter.concat(selectedSize);
    }

    @action.bound
    filterProducts(availableSizesList, sizesList) {
        if (sizesList.length === 0) return true;
        return sizesList.filter(size => availableSizesList.includes(size)).length > 0;
    }

    @action.bound
    filterTitles(title) {
        return title.toLowerCase().includes(this.searchText.toLowerCase());
    }

    @computed
    get products() {
        return this.sortedAndFilteredProducts;
    }

    @computed
    get sortedAndFilteredProducts() {
        const { productList, searchText, sortBy, sizeFilter, filterProducts, filterTitles } = this;
        let data = [...productList.values()].filter(eachProduct => filterProducts(eachProduct.availableSizes, sizeFilter));
        data = data.filter(product => filterTitles(product.title));

        if (sortBy == "SELECT") return data;
        return (data.sort((a, b) => (sortBy === 'DESCENDING') ? ((a.price < b.price) ? 1 : -1) : (a.price > b.price) ? 1 : -1));
    }

    @computed
    get totalNoOfProductsDisplayed() {
        return this.products.length;
    }

}

export default ProductStore;
