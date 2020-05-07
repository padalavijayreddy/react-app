import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const MainDiv = styled.div `${tw` flex justify-center bg-gray-300 items-center w-screen h-screen `}`;
const SubDiv = styled.div `${tw` w-full max-w-xs`}`;
const LoginForm = styled.div `${tw` block text-gray-700 text-sm font-bold mb-2`}`;
const Form = styled.form `${tw` bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}`;
const UserInputDiv = styled.div `${tw` mb-4`}`;
const UserInputLabel = styled.label `${tw` block text-gray-700 text-sm font-bold mb-2`}`;
const UserInput = styled.input `${tw` shadow hover:shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}`;
const PasswordInputDiv = styled.div `${tw` mb-6`}`;
const PasswordLabel = styled.label `${tw` block text-gray-700 text-sm font-bold mb-2`}`;
const PasswordInput = styled.input `${tw`shadow hover:shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}`;
const SubmitButton = styled.div `${tw` flex items-center justify-between`}`;
const Button = styled.button `${tw` bg-red-700 text-center hover:bg-red-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}`;
const ErrorMessage = styled.div `${tw` text-red-500 text-xs italic`}`;
const Forgot = styled.div `${tw` inline-block align-baseline border border-transparent hover:border-black p-1 font-bold text-sm text-red-500 hover:text-red-800`}`;
const Footer = styled.div `${tw` text-center text-gray-500 text-xs`}`;


export {
    MainDiv,
    SubDiv,
    LoginForm,
    Form,
    UserInputDiv,
    UserInputLabel,
    UserInput,
    PasswordInputDiv,
    PasswordLabel,
    PasswordInput,
    SubmitButton,
    Button,
    ErrorMessage,
    Forgot,
    Footer
};
