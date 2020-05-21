import React from 'react';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductDiv, ProductImg, ProductTitleP, ProductDivider, ProductSpan, ProductCurrency, ProductPrice, PriceFractional, ProductInstallmentP, Addbutton } from './productStyle';

toast.configure({
    position: 'bottom-center'
});

@observer
class Product extends React.Component {

    cartAndToastify = (event) => {
        this.onClickAddToCart(event);
        toast.warn('Product added to your cart');
    }

    onClickAddToCart = (event) => {
        const { onClickAddToCart } = this.props;
        onClickAddToCart(parseInt(event.target.id));
    }

    render() {
        const { productItem } = this.props;
        const { price, installmentsCount, imageURL, title, isFreeShipping, productId, currencyFormat } = productItem;
        const integerPart = Math.floor(price, 10);
        const fractionalPart = Math.floor((price - integerPart) * 100);
        const installmentAmount = (price / installmentsCount).toFixed(2);
        const freeShipping = (isFreeShipping) ? <p className="absolute top-10 right-0 bg-black p-1 text-xs text-white">Free Shipping</p> : '';
        return (
            <ProductDiv id={productId}>
                {freeShipping}
                <ProductImg src={imageURL} alt={title}></ProductImg>
                <ProductTitleP><b>{title}</b></ProductTitleP>
                <ProductDivider></ProductDivider>
                <ProductSpan>
                    <ProductCurrency>{currencyFormat}</ProductCurrency>
                    <ProductPrice>{integerPart}</ProductPrice>.
                    <PriceFractional>{fractionalPart}</PriceFractional>
                </ProductSpan>
                <ProductInstallmentP state={installmentsCount===0}> or {installmentsCount} x 
                {currencyFormat} {installmentAmount}</ProductInstallmentP>
                <Addbutton onClick={this.cartAndToastify} id={productId}>Add to cart</Addbutton>
            </ProductDiv>
        );
    }
}

export { Product };
