import { PaginationAPI } from '../services/ProductService';
import CartStore from './CartStore';
import ProductStorePagination from './ProductStore';

const paginationAPI = new PaginationAPI();
const productStorePagination = new ProductStorePagination(paginationAPI);
const cartStore = new CartStore(productStorePagination);

export default {
    productStorePagination,
    cartStore
};
