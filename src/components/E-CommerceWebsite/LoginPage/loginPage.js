import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Header from '../Header/header';
import { WelcomeLoginPage } from './loginPageStyle';

@observer
class LoginPage extends React.Component{
    
    render(){
        return (
            <WelcomeLoginPage>
               <Header/>
            </WelcomeLoginPage>
            )
    }
    
}

export default LoginPage