import React from 'react';
import { observable } from 'mobx';
import CartList from '../CartList';
import SubTotal from '../SubTotal';
import CheckoutButton from '../CheckoutButton';
import { observer } from 'mobx-react';
import { ProductCartDiv, DeleteButton, ProductCartMainDiv, ProductCartSubDiv, CartImage, CartImageP, CartP, ProductCartFooter } from './ProductCartStyle';

@observer
class ProductCart extends React.Component {

    hideCart = () => {
        const { toggleDisplayCart } = this.props;
        toggleDisplayCart();
    }

    render() {
        const { renderCartImage, cartStore, shouldDisplayCart } = this.props;
        const { cartProductList, totalCartAmount, noOfProductsInCart, onRemoveCartItem, getProductDetailsById, clearCart } = cartStore;
        return (
            <ProductCartDiv {...{shouldDisplayCart}}>
                    <DeleteButton onClick={this.hideCart}>X</DeleteButton>
                    <ProductCartMainDiv>
                      <ProductCartSubDiv>
                        <CartImage>
                            <CartImageP>{noOfProductsInCart}</CartImageP>
                            {renderCartImage()}
                        </CartImage>
                        <CartP>Cart</CartP>
                     </ProductCartSubDiv>    
                    <CartList cartProductList={cartProductList} onRemoveCartItem={onRemoveCartItem} getProductDetailsById={getProductDetailsById}/>
                    <ProductCartFooter>
                        <SubTotal totalCartAmount={totalCartAmount}/>
                        <CheckoutButton clearCart={clearCart} cartProductList={cartProductList}/>
                    </ProductCartFooter>
                </ProductCartMainDiv>
            </ProductCartDiv>
        );
    }
}

export { ProductCart };





// <div class="flex cart-container relative cart-container-open">
//   <button class="h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none">X</button>
//      <div class="cart-items p-4 bg-gray-800 flex flex-col w-full">
//       <div class="flex items-center justify-center">
//          <div class="h-10 mr-4">
//           <span>
//              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//              </svg>
//              </span>
//              <p class="text-center text-sm text-yellow-600 relative cart-position">0</p></div>
//              <h2 class="text-white font-bold text-xl">Cart</h2>
//              </div>
//              <div class="mt-8 overflow-y-auto flex-1">
//               <p class="text-white text-sm my-auto h-3/4 flex items-center justify-center">Add some products in the cart</p></div>
//              <div class="absolute bottom-0 right-0 p-4 total-checkout bg-gray-800 shadow-inner">
//              <div class="flex justify-between mt-4"><h3 class="text-gray-500">SUBTOTAL</h3><p class="text-yellow-600">₹ 0</p></div>
// <button disabled="" class="bg-black w-full py-2 text-white my-4 rounded cursor-not-allowed opacity-50 focus:outline-none">CHECKOUT</button></div></div></div>
