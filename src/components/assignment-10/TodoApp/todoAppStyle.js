import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const TodoApp = styled.div`${tw` flex flex-col justify-center items-center w-screen h-screen`}`;
const TodoDivision = styled.div`${tw` flex flex-col items-center w-2/4 bg-red-100`}`;


const Header = styled.h1`{
    ${tw`flex items-center font-hairline text-red-700 font-sans h-64`}
    font-size:140px;
}`;


export { TodoApp,TodoDivision,Header};



// const Button = styled.button`{
//     ${tw`text-lg`}
//     background-color:${props=>props.state};
//     width:${props=>props.width.width};
//     height:${props=>props.height.height};
//     transition: background 0.5s;
// }`;
// .heading {
//     font-size: 140px;
//     font-weight: 200;
//     font-family: Helvetica neue;
//     color: #b83f45;
//     display: flex;
//     align-items: center;
//     height: 20%;
// }