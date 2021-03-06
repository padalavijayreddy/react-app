import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { MainDiv, SubDiv, LoginForm, Form, UserInputDiv, UserInputLabel, UserInput, PasswordInputDiv, PasswordLabel, PasswordInput, SubmitButton, Button, ErrorMessage, Forgot, Footer } from './signInPageStyle';
import { API_FETCHING } from '../../../utils/APIUtils';
import { getAccessToken } from '../../../utils/StorageUtils';
import { PRODUCT_PAGE_PATH } from '../../../ProductPage/constants/RouteConstants';
import Loader from "../../../components/common/Icons/Loader";

export const SignInButton = ({ isLoading, onSubmit, onEnterKeyPress, SignIntext }) => {
    return (
        <Button disabled={isLoading} data-testid='sign-in-button' onClick={onSubmit} type="button" onKeyPress={onEnterKeyPress}>{(isLoading)?
        <Loader
            fill="black"
            height={25}
            width={25}
            />
        :SignIntext}</Button>
    );
};

SignInButton.defaultProps = {
    SignIntext: "Sign In",
};

@observer
class SignInPage extends React.Component {
    userNameRef = React.createRef()
    passwordRef = React.createRef()
    render() {
        const {
            onChangeUsername,
            onChangePassword,
            onEnterKeyPress,
            username,
            password,
            onSubmit,
            errorMessage,
            isLoading,
            //userNameRef,
            //passwordRef
        } = this.props;
        return (
            <MainDiv>    
            <SubDiv>
                <LoginForm>LOGIN FORM</LoginForm>
                <Form>
                    <UserInputDiv>
                        <UserInputLabel>Username</UserInputLabel>
                        <UserInput ref={this.userNameRef} onChange={onChangeUsername} value = {username} id="username" type="text" placeholder="Username"/>
                    </UserInputDiv>
                    <PasswordInputDiv>
                        <PasswordLabel>Password</PasswordLabel>
                        <PasswordInput ref={this.passwordRef} onChange={onChangePassword} value={ password } id="password" type="password" placeholder="Password" onKeyPress={onEnterKeyPress}/>
                    </PasswordInputDiv>
                    <SubmitButton>
                       <div>
                        <SignInButton {...{isLoading, onEnterKeyPress, onSubmit}}/>
                        <ErrorMessage>{errorMessage }</ErrorMessage>
                       </div>    
                        <Forgot href="#">Forgot Password?</Forgot>
                    </SubmitButton>
                </Form>
                <Footer> &copy;2020 PVR Products* pvt Lmtd. All rights reserved.</Footer>
            </SubDiv>
        </MainDiv>
        );
    }
}
export { SignInPage };
