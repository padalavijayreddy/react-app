import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const TodoApp = styled.div`${tw` flex flex-col justify-center items-center w-screen h-screen`}`;
const TodoDivision = styled.div`${tw` flex flex-col items-center w-2/4 bg-red-100`}`;


const Header = styled.h1`{
    ${tw`flex items-center font-hairline text-red-700 font-sans h-64`}
    font-size:140px;
}`;


export { TodoApp,TodoDivision,Header};