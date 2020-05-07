import { ProductAPI } from '../services/ProductService';
import CartStore from './CartStore';
import ProductStore from './ProductStore';

const productAPI = new ProductAPI();
const productStore = new ProductStore(productAPI);
const cartStore = new CartStore(productStore);

export default {
    productStore,
    cartStore
};
