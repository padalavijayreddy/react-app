import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Todos,CheckInput,Todoinput } from './todoStyle';

import todoStores from '../../../stores/TodoStores/index';
import TodoModel from '../../../stores/TodoModels/index';
import { MdDelete } from "react-icons/md";


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
            <Todos>
              <CheckInput  id="check" defaultChecked={todo.isCompleted} onClick={todo.onCompleteTodo} type="checkbox"></CheckInput>
              <Todoinput  disabled={todo.isCompleted} onChange={this.onUpdateTodo} type="text" value={todo.title} className="content-input" name="" />
              <button onClick={()=>onRemoveTodo(todo.id)}><MdDelete/></button>
            </Todos>
            );
    }
}

export default withRouter( Todo );