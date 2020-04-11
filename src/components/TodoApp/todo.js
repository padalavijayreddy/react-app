import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import todoStores from '../../stores/TodoStores/index.js';
import TodoModel from '../../stores/TodoModels/index.js';


@observer class Todo extends React.Component{
    
    onCompleteTodo(){
        
    }
    
    onRemoveTodo(){
        
    }
    
    render(){
        const {todo,onRemoveTodo} = this.props;
        return (
            <div className="flex">
              <input  id="check" checked={todo.isCompleted} onClick={todo.onCompleteTodo} type="checkbox"></input>
              <input  onChange={todo.onUpdateTodoTitle} type="text" value={todo.title} className="content-input" name="" />
              <button onClick={onRemoveTodo}>❌</button>
            </div>
            );
    }
}

export default withRouter( Todo );