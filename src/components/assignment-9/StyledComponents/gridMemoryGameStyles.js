import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Div = styled.div(
        props => ({
            width:(props.state)+'px'
        })
);

const GridGame = styled.div`${tw` flex flex-col justify-center items-center w-screen h-screen`}`;


export { Div,GridGame };