import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const CartDiv = styled.div `
    ${tw`flex text-white justify-between w-full m-1 shadow-xl`}
    border-top:1px solid white;
`;
const SubDiv = styled.div `${tw`flex`}`;
const ProductImg = styled.img `${tw`h-20 w-15 border-black m-1`}`;
const ProductDetails = styled.div `${tw`flex flex-col text-sm`}`;
const SubPartDiv = styled.div `${tw`flex flex-col text-sm`}`;
const PriceP = styled.div `${tw`text-yellow-600`}`;

export { CartDiv, SubDiv, ProductImg, ProductDetails, SubPartDiv, PriceP };
