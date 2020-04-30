import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { MainDiv, SubDiv, LoginForm, Form, UserInputDiv, UserInputLabel, UserInput, PasswordInputDiv, PasswordLabel, PasswordInput, SubmitButton, Button, ErrorMessage, Forgot, Footer } from './signInPageStyle';
import authStore from '../../stores/AuthenticationStore';
import GridMemoryGame from '../../../components/assignment-9/gridMemoryGame';
import ProductPage from '../../../ProductPage/components/ProductPage';
import { API_FETCHING } from '../../../utils/APIUtils';
import { getAccessToken } from '../../../utils/StorageUtils';

@observer
class SignInPage extends React.Component {
    @observable status;
    @observable username;
    @observable password;
    @observable errorMessage;

    constructor(props) {
        super(props);
        this.init();
    }


    @action.bound
    init() {
        this.password = '';
        this.username = '';
        this.errorMessage = '';
    }


    @action.bound
    onChangeUsername(event) {
        this.username = event.target.value;
    }
    @action.bound
    onChangePassword(event) {
        this.password = event.target.value;
    }



    @action.bound
    async onSubmit(event) {
        event.preventDefault();
        const { username, password } = this;
        if (username.trim().length === 0)
            this.errorMessage = 'Please enter username';
        else if (password.trim().length === 0)
            this.errorMessage = 'Please enter password';
        else {
            const userData = { username, password };
            await authStore.userSignIn(userData);
            if (getAccessToken()) {
                this.props.history.replace('/ProductPage');
                this.errorMessage = this.username = this.password = '';
            }
        }
    }

    render() {
        return (
            <MainDiv>    
            <SubDiv>
                <LoginForm>LOGIN FORM</LoginForm>
                <Form>
                    <UserInputDiv>
                        <UserInputLabel>Username</UserInputLabel>
                        <UserInput onChange={this.onChangeUsername} id="username" type="text" placeholder="Username"/>
                    </UserInputDiv>
                    <PasswordInputDiv>
                        <PasswordLabel>Password</PasswordLabel>
                        <PasswordInput onChange={this.onChangePassword} id="password" type="password" placeholder="Password"/>
                    </PasswordInputDiv>
                    <SubmitButton>
                       <div>
                        <Button onClick={this.onSubmit} type="button">Submit</Button>
                        <ErrorMessage>{ this.errorMessage }</ErrorMessage>
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
