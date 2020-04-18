import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const Button = styled.button`{
    ${tw`flex justify-center h-10 w-32 text-lg font-xl font-serif font-bold`}
    props => ({
        border:(props.state === "Light Mode")?'1px solid black':'1px solid white'
    })
}`;

const header = styled.div`${tw`flex flex-col`}`;

const MainHeader= styled.div`${tw`flex flex-col h-20 justify-center items-center font-2xl font-serif font-bold`}`;

const SubHeader = styled.div`${tw`flex p-1 h-20 justify-between items-center font-2xl font-serif font-bold`}`;

const TopLevelButton= styled.button `${tw`font-2xl font-serif font-bold`}`;

export { Button,header,MainHeader,SubHeader,TopLevelButton };

