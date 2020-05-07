import React from 'react';
import { observer } from 'mobx-react';
import { SizeFilter } from '../SizeFilter';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import { ProductCart } from '../ProductCart';
import { SearchBar } from '../SearchBar';
import { MainDiv, ProductPageHeader, Cookieconsent, SubProduct, ProductPageDetails, SignOutbutton, CartImage, CartImageP } from './productPageStyle';
import cookieconsent from 'cookieconsent';
import { SIGN_IN_PATH } from '../../../SignInPage/constants/RouteConstants';

@observer
class ProductPage extends React.Component {

    render() {
        const {
            productStore,
            onClickAddToCart,
            totalCartAmount,
            noOfProductsInCart,
            products,
            sizeFilter,
            getProductListAPIStatus,
            getProductListAPIError,
            onChangeSortBy,
            totalNoOfProductsDisplayed,
            onSelectSize,
            onChangeSearchText,
            toggleDisplayCart,
            renderCartImage,
            shouldDisplayCart,
            signOut,
            renderProductList,
            doNetworkCalls,
            cartStore
        } = this.props;
        return (
            <MainDiv>
                <ProductCart {...{shouldDisplayCart,toggleDisplayCart,renderCartImage,cartStore}}/>
                <ProductPageHeader>
                        <SignOutbutton data-testid='sign-out-button' onClick = { signOut }>Sign Out</SignOutbutton>
                        <SearchBar onChangeSearchText = {onChangeSearchText}/>
                        <CartImage data-testid='cart-open-button' onClick = {toggleDisplayCart }>
                            <CartImageP>{noOfProductsInCart}</CartImageP>
                            {renderCartImage()}
                        </CartImage>
                        <div></div>
                </ProductPageHeader> 
                <SubProduct>
                    <SizeFilter sizeFilter={sizeFilter} onSelectSize = {onSelectSize} />
                    <ProductPageDetails>
                        <LoadingWrapperWithFailure 
                             apiStatus={getProductListAPIStatus}
                             apiError={getProductListAPIError}
                             onRetryClick = {doNetworkCalls}                             
                             renderSuccessUI = {renderProductList}
                        />
                    </ProductPageDetails>
                </SubProduct>
                <Cookieconsent/>
            </MainDiv>
        );
    }
}

export { ProductPage };

window.cookieconsent.initialise({
    container: { Cookieconsent },
    "palette": {
        "popup": {
            "background": "#000"
        },
        "button": {
            "background": "#f1d600"
        }
    },
    "position": "bottom-left"
});
