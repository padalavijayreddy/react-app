import React from 'react';
import { observable } from 'mobx';
import CartItem from '../CartItem';
import { observer } from 'mobx-react';
import { CartListDiv, AddToCartP } from './CartListStyle';


@observer
class CartList extends React.Component {

    renderCartItems = () => {
        const { cartProductList, getProductDetailsById, onRemoveCartItem } = this.props;
        if ([...cartProductList.entries()].length === 0) return <AddToCartP>Add some products in the cart</AddToCartP>;
        return [...cartProductList.entries()].map(object => {
            const key = object[0],
                product = getProductDetailsById(object[0]),
                cartItem = object[1];
            return <CartItem {...{key,product,onRemoveCartItem,cartItem}}/>;
        });
    }

    render() {
        const { cartProductList } = this.props;
        return (
            <CartListDiv  {...{cartProductList}}>
               {this.renderCartItems()}
            </CartListDiv>
        );
    }
}

export { CartList };
