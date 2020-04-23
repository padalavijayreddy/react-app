import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Todos = styled.div`${tw`flex items-center justify-between w-full h-1/4`}`;
const CheckInput = styled.input`${tw`h-5 w-5 border-solid border-black border-2 shadow-lg text-lg`}`;
const Todoinput = styled.input`${tw`bg-red-100 shadow-lg text-lg m-1`}`;

export { Todos,CheckInput,Todoinput };