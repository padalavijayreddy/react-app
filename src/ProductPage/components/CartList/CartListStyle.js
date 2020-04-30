import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const CartListDiv = styled.div `
    ${tw`flex flex-col h-full justify-start`}
    overflow-y:${props => [...props.cartProductList.keys()].length>0?'scroll':''};
`;
const AddToCartP = styled.p `${tw`text-white text-center`}`;

export {
    CartListDiv,
    AddToCartP
};
