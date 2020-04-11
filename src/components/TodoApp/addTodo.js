import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable,action } from 'mobx';
import { observer } from 'mobx-react';
import todoStores from '../../stores/TodoStores/index.js';
import TodoModel from '../../stores/TodoModels/index.js';


@observer
class AddTodo extends React.Component{
    
    onAddTodo = (event) => {
       if(event.keyCode === 13) {
            todoStores.onAddTodo(event.target.value);
            event.target.value='';
        }
    }
    
    render(){
        return(
            <div>
              <input className="border-2 border-black border-solid w-full h-20" 
              type="text"
              id="givenInput"
              placeholder="What needs to be done?"
              onKeyDown={this.onAddTodo}
              />
            </div>
            );
    }
}

export default withRouter( AddTodo );