import React from 'react';
import './todo-list.css';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class TodoApp extends React.Component{
    @observable states = { StateOfTodo:this.props.done, Value : this.props.todo };
    
    checkbox = (event) => {
        if(event.target.checked){
            this.states.StateOfTodo = true;
        }
        else{
            this.states.StateOfTodo = false;
        }
        this.props.updatingCheckbox(event.target.checked,this.props.id);
    }
    
    InputEditFunction = (event) => {
        this.states.Value = event.target.value;
        this.props.updatingInputValue(this.states.Value,this.props.id);
    }
    
    render(){
        console.log(this.props);
        return(
          <div className="content">
            <input defaultChecked={this.states.StateOfTodo} id="check" onChange={this.checkbox} type="checkbox" className="checking-button button-after-checking"></input>
            <input onChange={this.InputEditFunction} disabled={this.states.StateOfTodo} type="text" className="content-input" defaultValue={this.props.todo} name="" />
            <button className="delete-button" onClick={this.props.removeTodoFromTodosList} id={this.props.id}>❌</button>
          </div>
       );
    }
}

export default withRouter( TodoApp );



