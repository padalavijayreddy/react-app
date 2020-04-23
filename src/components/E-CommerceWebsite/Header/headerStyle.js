import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const NavigationBar = styled.div`${tw` flex items-center text-lg w-full bg-black text-white justify-between items-center h-1/4`}`;
const Button  = styled.div`${tw` flex items-center text-lg w-full`}`;

export { NavigationBar,Button };


// .Home-navigation{
//     display:flex;
//     width:100%;
//     background-color:black;
//     color:white;
//     justify-content:space-between;
//     align-items:center;
//     height:50px;
// }