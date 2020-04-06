import React from 'react';
import {withRouter} from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

class YourState extends React.Component{
    state = {
        selectedState:'',
        submittedState:'',
    }
    
    handleChangeState = (event) => {
        this.setState({
            selectedState:event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submittedState:`Iam from ${this.state.selectedState} state`
        });
    }
    
    displayMessage = (event) => {
        return this.state.submittedState;
    }
    
    goBack = () =>{
      this.props.history.push('/FormComponent/');
     }
    
    render(){
        const statesList= this.props.stateList.map(states => {
            return <option value={states}>{states}</option>;
        });
        
        return (
            <form onSubmit={this.handleSubmit}>
              <div class="navigation">
               <button className="navigator-button" type="button" onClick={this.goBack}><IoMdArrowBack/></button>
               <b className="navigator-bar">Your State</b>
              </div>
              <select onChange={this.handleChangeState}>
              <option>Select Your State</option>{statesList}</select>
              <input  type="submit" value="Submit"/>
              <div>{this.displayMessage()}</div>
            </form>
            );
    }
}

export default withRouter(YourState);