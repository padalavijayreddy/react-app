import React from 'react';
import Product from '../Product';
import { observer } from 'mobx-react';
import { ProductListDiv } from './productListStyle';

@observer
class ProductList extends React.Component {
    productsList = () => {
        const { products, onClickAddToCart } = this.props;
        return products.map((eachProduct) => <Product key={eachProduct.productId} productItem={eachProduct} onClickAddToCart={onClickAddToCart}/>);
    }

    render() {
        return (
            <ProductListDiv>{this.productsList()}</ProductListDiv>
        );
    }
}

export { ProductList };
