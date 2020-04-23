//USERS STORE

import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class UserStore{
    
    @observable getUsersApiStatus;
    @observable getUsersApiError;
    @observable users
    userService
    
    
    constructor(userService){
        this.userService = userService;
        this.init();
    }
    

    @action.bound
    init(){
        this.getUsersApiStatus = API_INITIAL
        this.getUsersApiError = null;
        this.users = [];
    }
    

    @action
    clearStore(){
        this.init();
    }
    

    @action.bound
    setUsersApiResponse(usersResponse){
        this.users = usersResponse.map((user) => user.name);
    }
    

    @action.bound
    setUsersApiError(error){
        this.getUsersApiError = error;
    }
    
    
    @action.bound
    getUsersAPI(){
        const usersPromise = this.userService.getUsersAPI();
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersApiStatus,this.setUsersApiResponse)
        .catch(this.setUsersApiError);
    }
    
    
    @action.bound
    setUsersApiStatus(apiStatus){
        this.getUsersApiStatus = apiStatus;
    }
    
    
}

// const userService = new UserService();
// const userStore = new UserStore(userService);
// export default userStore;
export default UserStore