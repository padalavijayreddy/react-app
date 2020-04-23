import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable,action } from 'mobx';
import { observer } from 'mobx-react';

import todoStores from '../../../stores/TodoStores/index';
import TodoModel from '../../../stores/TodoModels/index';
import { AddTodos } from './addTodoStyle';


@observer
class AddTodo extends React.Component{
    
    onAddTodo = (event) => {
       if(event.keyCode === 13) {
            this.props.onAddTodo(event.target.value);
            event.target.value='';
        }
    }
    
    render(){
        return(
            <AddTodos>
              <input className="border-2 border-black border-solid w-full h-20" 
              type="text"
              id="givenInput"
              placeholder="What needs to be done?"
              onKeyDown={this.onAddTodo}
              />
            </AddTodos>
            );
    }
}

export default withRouter( AddTodo );