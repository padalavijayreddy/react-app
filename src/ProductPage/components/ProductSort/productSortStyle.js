import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductSortDiv = styled.div `${tw`flex justify-between h-10`}`;
const Select = styled.select `${tw`rounded-md bg-white border border-gray-400 hover:border-gray-700 focus:outline-none`}`;

export {
    ProductSortDiv,
    Select
};
