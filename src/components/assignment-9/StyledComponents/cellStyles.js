import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Button = styled.button`{
    ${tw`text-lg`}
    background-color:${props=>props.state};
    width:${props=>props.width.width};
    height:${props=>props.height.height};
    transition: background 0.5s;
}`;


export { Button };
