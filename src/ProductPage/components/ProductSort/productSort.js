import React from 'react';
import { observer } from 'mobx-react';
import Header from '../Header';
import { ProductSortDiv, Select } from './productSortStyle';

@observer
class ProductSort extends React.Component {

    onSelectSortBy = (value) => {
        const { onChangeSortBy } = this.props;
        onChangeSortBy(event.target.value);
    }

    render() {
        const { totalNoOfProductsDisplayed } = this.props;
        const sortByOptions = ['Lowest to highest', 'Highest to lowest'];
        const sortByList = sortByOptions.map((Eachstate, index) => {
            return <option key={index} value={Eachstate}>{Eachstate}</option>;
        });

        return (
            <form>
              <ProductSortDiv>
                 <Header totalNoOfProductsDisplayed= {totalNoOfProductsDisplayed} /> 
                 <Select onChange={this.onSelectSortBy}>
                 <option hidden="">SELECT</option><option value="ASCENDING" className="focus:outline-none"></option>{sortByList}</Select>
              </ProductSortDiv>
            </form>
        );
    }
}


export { ProductSort };
