import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';


class PaginationAPI {
    api
    constructor() {
        this.api = create({
            baseURL: `https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/`
        });
    }

    getProductsAPI = ({ limit, offset }) => {
        return networkCallWithApisauce(this.api, `products?limit=${limit}&offset=${offset}`, {}, apiMethods.get);
    }
}

export { PaginationAPI };
