import { observable, action, computed } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class ProductModel {
    productId
    availableSizes
    currencyFormat
    currencyId
    description
    installmentsCount
    isFreeShipping
    price
    printStyle
    title
    imageURL

    constructor(data) {
        this.init(data);
    }


    @action.bound
    init(data) {
        this.productId = data.id;
        this.availableSizes = data.availableSizes;
        this.currencyFormat = data.currencyFormat;
        this.currencyId = data.currencyId;
        this.description = data.description;
        this.installmentsCount = parseInt(data.installments);
        this.isFreeShipping = data.isFreeShipping;
        this.price = parseFloat(data.price);
        this.printStyle = data.style;
        this.title = data.title;
        this.imageURL = data.image;
    }

}


export default ProductModel;
