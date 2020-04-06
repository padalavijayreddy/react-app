import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

class Greetings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInputText:'',
            displayName:''
        };
    }
    
    handleUserInput = (event) => {
        this.setState({
            userInputText:event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ 
            displayName : `Hello ${this.state.userInputText} Have a nice day`
        });
        if(this.state.userInputText){
            this.setState({userInputText:''});
        }
    }
    
    displayMessage = () => {
         return this.state.displayName;
    }
    
    goBack = () =>{
      this.props.history.push('/FormComponent/');
     }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
             <div class="navigation">
               <button className="navigator-button" type="button" onClick={this.goBack}><IoMdArrowBack/></button>
               <b className="navigator-bar">Greetings</b>
             </div>
               <label class="Greetings-Main">
                 <input type="text" onChange={this.handleUserInput} value={this.state.userInputText} className="Greetings"/>
                 <input type="submit" value='Greet' className="Greetings-button" />
                 <div className="Greetings-display">{this.displayMessage()}</div>
               </label>
            </form>
            );
    }
}

export default withRouter(Greetings) ;