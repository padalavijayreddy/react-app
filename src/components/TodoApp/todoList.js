import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Todo from './todo.js';

@observer class TodoList extends React.Component{
    
    renderTodoList = (filteredTodos,onRemoveTodo) => {
        return filteredTodos.map((item)=> <Todo key={item.id} todo={item} onRemoveTodo={onRemoveTodo}/>);
    }
    
    render(){
        const { filteredTodos,onRemoveTodo } = this.props;
        console.log(filteredTodos)
        return(
            <div>
               {this.renderTodoList(filteredTodos,onRemoveTodo)}
            </div>
            );
    }
}

export default withRouter( TodoList );