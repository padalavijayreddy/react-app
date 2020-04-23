import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Footer = styled.div`${tw` flex justify-between h-1/4 w-full items-center`}`;
const Filterbutton = styled.div`{
    ${tw`text-lg font-sans`};
    padding:5px;
    text-align:center;
    border:${props=>(props.border)?'1px solid black':''};
}`;

const ItemsCount = styled.div`${tw`text-lg font-sans`}`;

export {  Footer,ItemsCount,Filterbutton };