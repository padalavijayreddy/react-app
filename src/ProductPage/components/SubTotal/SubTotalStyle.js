import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const SubTotalDiv = styled.div `${tw`flex justify-between`}`;
const SubTotalP = styled.p `${tw`text-gray-100`}`;
const TotalCartAmountP = styled.p `${tw`text-yellow-600`}`;

export {
    SubTotalDiv,
    SubTotalP,
    TotalCartAmountP
};
