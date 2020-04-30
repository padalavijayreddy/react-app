import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const CheckoutButtonDiv = styled.div `${tw`h-10 bg-black m-1 flex`}`;
const CheckOutButton = styled.button `${tw`flex justify-center items-center w-full text-gray-400 text-center self-center`}`;

export { CheckOutButton, CheckoutButtonDiv };
