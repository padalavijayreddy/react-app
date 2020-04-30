import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import AuthService from '../../services/AuthenticationService';
import { setAccessToken, clearUserSession, getAccessToken, ACCESS_TOKEN } from '../../utils/StorageUtils';

class AuthStore {

    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    authService

    constructor(authService) {
        this.authService = authService;
        this.init();
    }


    @action.bound
    init() {
        this.getUserSignInAPIError = null;
        this.getUserSignInAPIStatus = API_INITIAL;
    }


    @action.bound
    clearStore() {
        this.init();
    }


    @action.bound
    userSignIn() {
        const signInPromise = this.authService.signInAPI();
        console.log('promise', signInPromise);
        return bindPromiseWithOnSuccess(signInPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);
    }


    @action.bound
    setGetUserSignInAPIStatus(apiStatus) {
        this.getUserSignInAPIStatus = apiStatus;
    }


    @action.bound
    setGetUserSignInAPIError(apiError) {
        this.getUserSignInAPIError = apiError;
    }


    @action.bound
    setUserSignInAPIResponse(signInResponse) {
        signInResponse.forEach(token => setAccessToken(token.access_token));
        console.log(getAccessToken(ACCESS_TOKEN));
    }

    @action.bound
    userSignOut(SignInResponse) {
        clearUserSession();
    }
}

const authService = new AuthService();
const authStore = new AuthStore(authService);
export { authStore };
