import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductDiv = styled.div `${tw`flex flex-col border border-transparent hover:border-black md:w-46 lg:w-30 xl:w-56 m-2 items-center p-2 relative`}`;
const ProductImg = styled.img `${tw`w-4/5 object-contain mb-2`}`;
const ProductTitleP = styled.p `${tw`h-10 text-center`}`;
const ProductDivider = styled.div `${tw`w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4`}`;
const ProductSpan = styled.p `${tw`flex items-end`}`;
const ProductCurrency = styled.span `${tw`text-xs mr-1`}`;
const ProductPrice = styled.span `${tw`text-xl`}`;
const PriceFractional = styled.div `${tw`text-xs`}`;
const ProductInstallmentP = styled.p `
      ${tw`text-sm text-gray-700 mb-4 h-5`}
      visibility:${props => (props.state)?'hidden':''};
`;
const Addbutton = styled.button `${tw`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}`;

export {
    ProductDiv,
    ProductImg,
    ProductTitleP,
    ProductDivider,
    ProductSpan,
    ProductCurrency,
    ProductPrice,
    PriceFractional,
    ProductInstallmentP,
    Addbutton
};
