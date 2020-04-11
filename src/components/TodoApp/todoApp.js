import React from 'react';
import {withRouter} from 'react-router-dom';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';
import TodoFooter from './todoFooter.js';
import { observer } from 'mobx-react';
import todoStores from '../../stores/TodoStores/index.js';
import TodoModel from '../../stores/TodoModels/index.js';

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