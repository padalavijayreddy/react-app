import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { MainDiv, SubDiv, LoginForm, Form, UserInputDiv, UserInputLabel, UserInput, PasswordInputDiv, PasswordLabel, PasswordInput, SubmitButton, Button, ErrorMessage, Forgot, Footer } from './signInPageStyle';
import { API_FETCHING } from '../../../utils/APIUtils';
import { getAccessToken } from '../../../utils/StorageUtils';
import { PRODUCT_PAGE_PATH } from '../../../ProductPage/constants/RouteConstants';

const DisplayMessage = (props) => {
    return <div>{props.children}</div>;
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
                        <Button disabled={isLoading} data-testid='sign-in-button' onClick={onSubmit} type="button" onKeyPress={onEnterKeyPress}>{(isLoading)?"Loading...":"Sign in"}</Button>
                        <ErrorMessage>{errorMessage }</ErrorMessage>
                       </div>    
                        <Forgot href="#">Forgot Password?</Forgot>
                    </SubmitButton>
                </Form>
                <DisplayMessage>HI ..</DisplayMessage>
                <Footer> &copy;2020 PVR Products* pvt Lmtd. All rights reserved.</Footer>
            </SubDiv>
        </MainDiv>
        );
    }
}

export { SignInPage };
