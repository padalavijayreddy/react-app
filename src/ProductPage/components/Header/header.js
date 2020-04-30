import React from 'react';
import { observer } from 'mobx-react';
import { HeaderDiv } from './headerStyle';

@observer
class Header extends React.Component {

    render() {
        const { totalNoOfProductsDisplayed } = this.props;
        return (
            <HeaderDiv >{totalNoOfProductsDisplayed} Product(s) found.</HeaderDiv>
        );
    }
}

export { Header };
