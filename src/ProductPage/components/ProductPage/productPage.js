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
            cartStore,
            currentPagePositionIncrementor,
            currentPagePositionDecrementor,
            currentPagePosition,
            totalCountOfPages
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
                <div class="flex justify-end items-center">
                    <button disabled={currentPagePosition===1} onClick={currentPagePositionDecrementor} class="flex justify-center bg-black text-white w-8 h-8 mr-2 focus:outline-none">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                            </path>
                        </svg>
                    </button>
                    <p class="border border-black w-8 h-8 flex justify-center items-center">{currentPagePosition}</p>
                    <div class="mx-2"> / </div>
                    <p>{totalCountOfPages}</p>
                    <button disabled={currentPagePosition===totalCountOfPages} onClick={currentPagePositionIncrementor} class="flex justify-center bg-black text-white w-8 h-8 ml-2 focus:outline-none ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z">
                            </path>
                        </svg>
                    </button>
                </div>
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
