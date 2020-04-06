import React from 'react';
import './todo-list.css';

class UserInput extends React.Component{
    state = {
        userInput:''
    }
    
    onChangeUserInput = event => {
        this.setState({
            userInput:event.target.value
        });
    };
    
    render(){
        const { userInput,onChangeUserInput } = this.props
        return (
            <input 
               type='text' 
               value={this.state.userInput} 
               onChange={this.onChangeUserInput}
             />
            )
    }
}


const userInput = () => {
    return <input type="text"/>
}