import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

class DisabledButton extends React.Component{
    state = {
        isDisableButtonChecked:false,
        showMessage:''
    }
    
    handleChange = (event) => {
        if(this.state.isDisableButtonChecked){
            this.state.isDisableButtonChecked = false;
            this.setState({
                showMessage:'',
            });
        }
        else{
            this.state.isDisableButtonChecked = true;
            this.setState({
                showMessage:`Iam disabled`,
            });
        }
    }
    
    handleSubmit = (event) => {
        this.setState({
            showMessage:'Im enabled'
        });
        event.preventDefault();
    }
    
    displayMessage = () => {
        return this.state.showMessage;
    }
    
    goBack = () =>{
      this.props.history.push('/FormComponent/');
     }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <div class="navigation">
               <button className="navigator-button" type="button" onClick={this.goBack}><IoMdArrowBack/></button>
               <b className="navigator-bar">Disabled Button</b>
              </div>
              <input type="checkbox" onClick={this.handleChange}/>
              <div>
                <h6>DisabledButton</h6>
              </div>
              <input type="submit" disabled={this.state.isDisableButtonChecked?true:false} value="Click Me"/>
              <div>{this.displayMessage()}</div>
            </form>
            );
    }
}

export default withRouter(DisabledButton);