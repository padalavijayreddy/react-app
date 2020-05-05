import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import productStore from '../../stores/ProductStore';
// import authStore from '../../../SignInPage/stores/AuthenticationStore';
import SignInPage from '../../../SignInPage/components/SignInPage';
import { SizeFilter } from '../SizeFilter';
import { ProductList } from '../ProductList';
import { ProductSort } from '../ProductSort';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import NoDataView from '../../../components/common/NoDataView';
import { ProductCart } from '../ProductCart';
import { SearchBar } from '../SearchBar';
import { MainDiv, ProductPageHeader, Cookieconsent, SubProduct, ProductPageDetails, SignOutbutton, CartImage, CartImageP, SortAndListRendering } from './productPageStyle';
import cookieconsent from 'cookieconsent';
import { SIGN_IN_PATH } from '../../../SignInPage/constants/RouteConstants';



@inject('cartStore', 'authStore')
@observer
class ProductPage extends React.Component {
    @observable shouldDisplayCart;

    constructor(props) {
        super(props);
        this.shouldDisplayCart = false;
    }

    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
        const { cartStore } = this.props;
        const { productStore } = cartStore;
        productStore.getProductList();
    }

    signOut = () => {
        const { authStore } = this.props;
        authStore.userSignOut();
        this.props.history.replace(SIGN_IN_PATH);
    }

    renderProductList = observer(({}) => {
        const { cartStore } = this.props;
        const { productStore, onClickAddToCart } = cartStore;
        const { products, onChangeSortBy, totalNoOfProductsDisplayed, onSelectSize } = productStore;
        if (products.length === 0) {
            return <NoDataView/>;
        }
        else {
            return (
                <SortAndListRendering>
                    <ProductSort onChangeSortBy = {onChangeSortBy} totalNoOfProductsDisplayed={ totalNoOfProductsDisplayed }/>
                    <ProductList products = {products} onClickAddToCart ={onClickAddToCart}/>
                 </SortAndListRendering>
            );
        }

    });

    toggleDisplayCart = () => {
        {
            this.shouldDisplayCart = (this.shouldDisplayCart) ? false : true;
        }
    }

    renderCartImage = () => {
        return (
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" height="40" 
            viewBox="0 0 24 24" fill="none" 
            stroke="white" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round" 
            className="fixed"><circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        );
    }

    render() {
        const { cartStore } = this.props;
        const { productStore, onClickAddToCart, totalCartAmount, noOfProductsInCart } = cartStore;
        const { products, sizeFilter, getProductListAPIStatus, getProductListAPIError, onChangeSortBy, totalNoOfProductsDisplayed, onSelectSize, onChangeSearchText } = productStore;
        const { toggleDisplayCart, renderCartImage, shouldDisplayCart } = this;
        return (
            <MainDiv>
                <ProductCart {...{shouldDisplayCart,toggleDisplayCart,renderCartImage,cartStore}}/>
                <ProductPageHeader>
                        <SignOutbutton data-testid='sign-out-button' onClick = { this.signOut }>Sign Out</SignOutbutton>
                        <SearchBar onChangeSearchText = {onChangeSearchText}/>
                        <CartImage data-testid='cart-open-button' onClick = { this.toggleDisplayCart }>
                            <CartImageP>{noOfProductsInCart}</CartImageP>
                            {this.renderCartImage()}
                        </CartImage>
                        <div></div>
                </ProductPageHeader> 
                <SubProduct>
                    <SizeFilter sizeFilter={sizeFilter} onSelectSize = {onSelectSize} />
                    <ProductPageDetails>
                        <LoadingWrapperWithFailure 
                             apiStatus={getProductListAPIStatus}
                             apiError={getProductListAPIError}
                             onRetryClick = {this.doNetworkCalls}                             
                             renderSuccessUI = {this.renderProductList}
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
