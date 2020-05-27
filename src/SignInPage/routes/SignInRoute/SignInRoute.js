import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { API_FETCHING } from '@ib/api-constants';
import { PRODUCT_PAGE_PATH } from '../../../ProductPage/constants/RouteConstants';
import { SignInPage } from '../../components/SignInPage';
import { isLoggedIn } from '../../utils/AuthUtils';


@inject('authStore')
@observer
class SignInRoute extends React.Component {
        @observable status;
        @observable username;
        @observable password;
        @observable errorMessage;
        signInPageRef

        constructor(props) {
            super(props);
            this.init();
        }

        @action.bound
        init() {
            this.signInPageRef = React.createRef();
            this.password = '';
            this.username = '';
            this.errorMessage = '';
        }

        componentDidMount() {
            if (this.signInPageRef.current !== null) {
                this.signInPageRef.current.userNameRef.current.focus();
            }
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
        onSignInSuccess() {
            const { history } = this.props;
            history.replace(PRODUCT_PAGE_PATH);
        }

        onSignInFailure = () => {
            const { authStore } = this.props;
            const { getUserSignInAPIError: apiError } = authStore;
            if (apiError !== null && apiError !== undefined) {
                this.errorMessage = apiError;
            }
            // else {
            //     this.errorMessage = "Something went error";
            // }
        }

        @action.bound
        async onSubmit(event) {
            event.preventDefault();
            const { username, password } = this;
            if (username.trim().length === 0) {
                this.errorMessage = 'Please enter username';
                this.signInPageRef.current.userNameRef.current.focus();
            }
            else if (password.trim().length === 0) {
                this.errorMessage = 'Please enter password';
                this.signInPageRef.current.passwordRef.current.focus();
            }
            else {
                const userData = { username, password };
                const { onSignInSuccess, onSignInFailure } = this;
                const { authStore } = this.props;
                await authStore.userSignIn(userData, onSignInSuccess, onSignInFailure);
            }
        }

        renderProductsPage = () => {
            return <Redirect to={PRODUCT_PAGE_PATH} />;
        }

        render() {
            if (isLoggedIn()) {
                return this.renderProductsPage();
            }
            const { authStore } = this.props;
            const {
                props: {},
                onChangeUsername,
                onChangePassword,
                onEnterKeyPress,
                username,
                password,
                onSubmit,
                errorMessage,
                signInPageRef
                //userNameRef,
                //passwordRef
            } = this, isLoading = (authStore.getUserSignInAPIStatus === API_FETCHING);
            return ( < SignInPage ref = { signInPageRef } { ...{
                        onChangeUsername,
                        onChangePassword,
                        onEnterKeyPress,
                        username,
                        password,
                        onSubmit,
                        isLoading,
                        errorMessage,
                        //userNameRef,
                        //passwordRef
                    }
                }
                />);
            }
        }

        export { SignInRoute };
