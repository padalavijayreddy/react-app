import React from 'react';
import {withRouter} from 'react-router-dom';
import { observer } from 'mobx-react';

import AddTodo from './addTodo';
import TodoList from './todoList';
import TodoFooter from './todoFooter';

import todoStores from '../../stores/TodoStores/index';
import TodoModel from '../../stores/TodoModels/index';

@observer class TodoApp extends React.Component{
    renderUserInput = () => {
        console.log('UserInput');
        return <AddTodo />;
    }
    
    renderTodoList = () => {
        return <TodoList  filteredTodos={todoStores.filteredTodos} onRemoveTodo={todoStores.onRemoveTodo}/>;
    }
    
    renderTodoAppFooter = () => {
        const { activeTodosCount, onClearCompleted, onChangeSelectedFilter, selectedFilter} = todoStores;
        return <TodoFooter activeTodosCount={activeTodosCount} onClearCompleted={onClearCompleted} onChangeSelectedFilter={onChangeSelectedFilter} selectedFilter={selectedFilter}  />;
    }
    
    render(){
        console.log('hi');
        return(
            <div>
              {this.renderUserInput()}
              {this.renderTodoList()}
              {this.renderTodoAppFooter()}
            </div>
            );
    }
}

export default withRouter( TodoApp );