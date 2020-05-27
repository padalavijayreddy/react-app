import { observable, action, computed } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import ProductModel from '../../stores/models/productModel';

class ProductStorePagination {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    ProductAPI
    @observable sizeFilter
    @observable sortBy
    @observable searchText
    @observable currentPage
    @observable productLimit
    totalProducts
    totalCountOfPages

    constructor(ProductAPI) {
        this.ProductAPI = ProductAPI;
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
        this.totalCountOfPages = 0;
        this.totalProducts = 0;
        this.productsLimit = 4;
        this.currentPagePosition = 1;
    }

    @action.bound
    onChangeSearchText = (changedText) => {
        this.searchText = changedText;
    }


    @action.bound
    getProductList() {
        const {
            ProductAPI,
            productsLimit: limit,
            setGetProductListAPIStatus,
            setProductListResponse,
            setGetProductListAPIError
        } = this;
        const offset = this.currentPagePosition - 1;
        const productPromise = ProductAPI.getProductsAPI({ limit, offset });
        return bindPromiseWithOnSuccess(productPromise)
            .to(setGetProductListAPIStatus, setProductListResponse)
            .catch(setGetProductListAPIError);
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
        this.productList.clear();
        const { products, total } = apiResponse;
        if (!(products === undefined || products.length <= 0))
            products.forEach((data) => this.productList.set(data.id, new ProductModel(data)));
        else this.productList = new Map();
        this.totalProducts = total;
        this.totalCountOfPages = Math.ceil(total / this.productsLimit);
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

    @action.bound
    currentPagePositionIncrementor() {
        const { currentPagePosition, totalCountOfPages } = this;
        (currentPagePosition <= totalCountOfPages && (this.currentPagePosition += 1) && this.getProductList());

    }

    @action.bound
    currentPagePositionDecrementor() {
        const { currentPagePosition } = this;
        (currentPagePosition > 1 && (this.currentPagePosition -= 1) && this.getProductList());
    }

    clearStore = () => this.init();

}

export default ProductStorePagination;
