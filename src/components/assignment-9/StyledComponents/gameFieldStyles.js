import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Div = styled.div`{
    ${tw`flex flex-wrap justify-between`}
    width:${props=>props.width.width};
    height:${props=>props.height.height};
}`;

export { Div };
