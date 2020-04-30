import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const MainDiv = styled.div `${tw`flex flex-col w-full`}`;
const ProductPageHeader = styled.div `${tw`flex justify-between items-center`}`;
const ProductPageDetails = styled.div `${tw`flex w-full justify-center`}`;
const SignOutbutton = styled.button `${tw`border border-gray-800 m-2 h-10 w-24 p-1 rounded text-xs`}`;
const CartImage = styled.button `${tw`bg-gray-800 fixed right-0 p-2 cursor-pointer flex justify-center items-center self-stretch h-12 w-12`}`;
const CartImageP = styled.p `${tw`text-sm text-yellow-600 relative ml-2`}`;
const SortAndListRendering = styled.div `${tw`flex flex-col flex-1`}`;
const SubProduct = styled.div `${tw`flex`}`;
const Cookieconsent = styled.div `${tw``}`;

export {
    MainDiv,
    ProductPageHeader,
    SubProduct,
    ProductPageDetails,
    SignOutbutton,
    CartImage,
    CartImageP,
    SortAndListRendering,
    Cookieconsent
};
