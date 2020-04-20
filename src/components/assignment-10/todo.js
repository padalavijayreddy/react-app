import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import todoStores from '../../stores/TodoStores/index';
import TodoModel from '../../stores/TodoModels/index';


@observer class Todo extends React.Component{
    
    onUpdateTodo = (event) => {
        let value = event.target.value;
        this.props.todo.onUpdateTodoTitle(value);
    }
    
    onRemoveTodo(){
        
    }
    
    render(){
        const {todo,onRemoveTodo} = this.props;
        return (
            <div className="flex">
              <input  id="check" defaultChecked={todo.isCompleted} onClick={todo.onCompleteTodo} type="checkbox"></input>
              <input  onChange={this.onUpdateTodo} type="text" value={todo.title} className="content-input" name="" />
              <button onClick={()=>onRemoveTodo(todo.id)}>❌</button>
            </div>
            );
    }
}

export default withRouter( Todo );