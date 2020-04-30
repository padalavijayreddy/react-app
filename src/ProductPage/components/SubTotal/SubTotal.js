import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { SubTotalDiv, SubTotalP, TotalCartAmountP } from './SubTotalStyle';

@observer
class SubTotal extends React.Component {

    render() {
        const { totalCartAmount } = this.props;
        return (
            <SubTotalDiv>
                <SubTotalP>SUBTOTAL</SubTotalP>
                <TotalCartAmountP>{totalCartAmount}</TotalCartAmountP>
            </SubTotalDiv>
        );
    }
}

export { SubTotal };
