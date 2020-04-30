import ProductService from '../services/ProductService';
import CartStore from './CartStore';
import ProductStore from './ProductStore';

const productService = new ProductService();
const productStore = new ProductStore(productService);
const cartStore = new CartStore(productStore);

export default {
    productStore,
    cartStore
};
