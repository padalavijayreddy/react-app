import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductCartDiv = styled.div `
    ${tw`flex fixed top-0 right-0 z-10 w-1/3`}
    width:${props => !props.shouldDisplayCart?'0%':''};
    transition: width 0.3s;
`;
const DeleteButton = styled.button `${tw`h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none`}`;
const ProductCartMainDiv = styled.div `${tw`h-screen p-4 bg-gray-800 flex flex-col w-full justify-between`}`;
const ProductCartSubDiv = styled.div `${tw`flex items-center justify-center`}`;
const CartImage = styled.div `${tw`bg-gray-800 p-2 cursor-pointer flex justify-center items-center self-stretch h-12 w-12`}`;
const CartImageP = styled.p `${tw`text-sm text-yellow-600 relative ml-2`}`;
const CartP = styled.p `${tw`text-white font-bold text-xl z-10`}`;
const ProductCartFooter = styled.div `${tw`flex flex-col h-1/4`}`;

export {
    ProductCartDiv,
    DeleteButton,
    ProductCartMainDiv,
    ProductCartSubDiv,
    CartImage,
    CartImageP,
    CartP,
    ProductCartFooter
};
