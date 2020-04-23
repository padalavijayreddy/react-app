import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { TodosList } from './todoListStyle';

import Todo from '../Todos/todo';

@observer class TodoList extends React.Component{
    
    renderTodoList = (filteredTodos,onRemoveTodo,onAddTodo) => {
        return filteredTodos.map((item)=> <Todo key={item.id} todo={item} onRemoveTodo={onRemoveTodo} onAddTodo={onAddTodo}/>);
    }
    
    render(){
        const { filteredTodos,onRemoveTodo,onAddTodo } = this.props;
        return(
            <TodosList>
               {this.renderTodoList(filteredTodos,onRemoveTodo,onAddTodo)}
            </TodosList>
            );
    }
}

export default withRouter( TodoList );