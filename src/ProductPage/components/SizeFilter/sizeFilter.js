import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { Button, SizeFilterDiv, Sizes, SizesList } from './sizeFilterStyle';

@observer
class SizeFilter extends React.Component {

    changeSize = (event) => {
        const { onSelectSize } = this.props;
        onSelectSize(event.target.value);
    }

    sizesList = () => {
        const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        const { sizeFilter } = this.props;
        return sizes.map((eachSize, index) => {
            return <Button 
            onClick={this.changeSize} 
            value={eachSize}
            state = {sizeFilter.includes(eachSize)}
            key={index}>{eachSize}</Button>;
        });
    }

    render() {
        const sizes = this.sizesList();
        return (
            <SizeFilterDiv>
                <Sizes>Sizes:</Sizes>
                <SizesList>{sizes}</SizesList>
            </SizeFilterDiv>
        );
    }
}


export { SizeFilter };
