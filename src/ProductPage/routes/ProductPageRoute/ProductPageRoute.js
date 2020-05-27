import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { ProductList } from '../../components/ProductList';
import { ProductSort } from '../../components/ProductSort';
import NoDataView from '../../../components/common/NoDataView';
import { SIGN_IN_PATH } from '../../../SignInPage/constants/RouteConstants';
import { ProductPage } from '../../components/ProductPage';
import { SortAndListRendering } from '../../components/ProductPage/productPageStyle';

@inject('cartStore', 'authStore')
@observer
class ProductPageRoute extends React.Component {
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
        const {
            productStore,
            onClickAddToCart,
            totalCartAmount,
            noOfProductsInCart
        } = cartStore;
        const {
            products,
            sizeFilter,
            getProductListAPIStatus,
            getProductListAPIError,
            onChangeSortBy,
            totalNoOfProductsDisplayed,
            onSelectSize,
            onChangeSearchText,
            currentPagePositionIncrementor,
            currentPagePositionDecrementor,
            currentPagePosition,
            totalCountOfPages
        } = productStore;
        const {
            toggleDisplayCart,
            renderCartImage,
            shouldDisplayCart,
            signOut,
            renderProductList,
            doNetworkCalls
        } = this;
        return (
            <ProductPage 
            {...{
            cartStore,
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
            currentPagePositionIncrementor,
            currentPagePositionDecrementor,
            currentPagePosition,
            totalCountOfPages
            }}
            />
        );
    }
}

export { ProductPageRoute };
