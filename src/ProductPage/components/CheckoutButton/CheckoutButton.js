import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { CheckOutButton, CheckoutButtonDiv } from './CheckoutButtonStyle';

@observer
class CheckoutButton extends React.Component {

    clearCart = () => {
        const { clearCart } = this.props;
        clearCart();
        alert('Thank You for Shopping With Us ..Your product will be delivered in 3 days to the address mentioned in the profile');

    }

    render() {
        const { cartProductList } = this.props;
        return (
            <CheckoutButtonDiv>
              <CheckOutButton disabled={([...cartProductList.values()].length>0)?false:true} onClick={this.clearCart}>CHECKOUT</CheckOutButton>
            </CheckoutButtonDiv>
        );
    }
}

export { CheckoutButton };
