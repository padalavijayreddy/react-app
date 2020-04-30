import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const Button = styled.button `{
    ${tw`h-10 w-10 m-1 rounded-full hover:bg-black hover:text-white`}
    background-color:${props=>(props.state)?'black':'white'};
    color:${props=>(props.state)?'white':'black'}
}`;

const SizeFilterDiv = styled.div `${tw`w-1/4`}`;
const Sizes = styled.div `${tw`m-4`}`;
const SizesList = styled.div `${tw`flex justify-between`}`;

export {
    Button,
    SizeFilterDiv,
    Sizes,
    SizesList
};
