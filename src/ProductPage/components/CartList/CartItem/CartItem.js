import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { CartDiv, SubDiv, ProductImg, ProductDetails, SubPartDiv, PriceP } from './CartItemStyle';


@observer
class CartItem extends React.Component {

    onRemoveCartItem = (event) => {
        const { onRemoveCartItem } = this.props;
        onRemoveCartItem(parseInt(event.target.id));
    }

    render() {
        const { product, cartItem } = this.props;
        return (
            <CartDiv state={true} >
                    <SubDiv> 
                        <ProductImg src={product.imageURL}></ProductImg>
                        <ProductDetails>
                            <p>{product.title}</p>
                            <p>{product.printStyle}</p>
                            <p>Quantity:{cartItem.quantity}</p>
                        </ProductDetails>
                    </SubDiv>    
                        <SubPartDiv>
                            <button data-testid='remove-cart-item' id={cartItem.productId} onClick={this.onRemoveCartItem}>X</button>
                            <PriceP>{product.price}</PriceP>
                        </SubPartDiv>
            </CartDiv>
        );
    }
}

export { CartItem };
