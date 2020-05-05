import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { API_FETCHING } from '../../../utils/APIUtils';
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
        const {
            props: {},
            onChangeUsername,
            onChangePassword,
            username,
            password,
            onSubmit,
            errorMessage
        } = this;
        return (<SignInPage
        {...{
        onChangeUsername,
        onChangePassword,
        username,
        password,
        onSubmit,
        errorMessage}}
        />);
    }
}

export { SignInRoute };
