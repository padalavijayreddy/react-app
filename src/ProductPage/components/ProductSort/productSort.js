import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Header } from '../Header';
import { ProductSortDiv, Select } from './productSortStyle';

@observer
class ProductSort extends React.Component {

    @observable selectType = "SELECT";

    onSelectSortBy = (event) => {
        const { value } = event.target;
        this.selectType = value;
        const { onChangeSortBy } = this.props;
        onChangeSortBy(value);
    }

    render() {
        const { totalNoOfProductsDisplayed } = this.props;
        return (
            <form>
              <ProductSortDiv>
                 <Header totalNoOfProductsDisplayed= {totalNoOfProductsDisplayed} /> 
                 <Select value={this.selectType} onChange={this.onSelectSortBy}>
                    <option value="SELECT" disabled>SELECT</option>
                    <option value="ASCENDING">Lowest to highest</option>
                    <option value="DESCENDING">Highest to lowest</option>
                 </Select>
              </ProductSortDiv>
            </form>
        );
    }
}


export { ProductSort };
