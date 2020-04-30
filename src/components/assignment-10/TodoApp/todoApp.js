/*global fetch*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Offline, Online } from "react-detect-offline";
import { TodoApp, TodoDivision, Header } from './todoAppStyle';

import AddTodo from '../AddTodo/addTodo';
import TodoList from '../TodoList/todoList';
import TodoFooter from '../TodoFooter/todoFooter';

import todoStores from '../../../stores/TodoStores/index';
import TodoModel from '../../../stores/TodoModels/index';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure';
import NoDataView from '../../common/NoDataView';


@inject('todoStore')
@observer
class RestAPITodoApp extends React.Component {

    renderUserInput = () => {
        const { todoStore } = this.props;
        return <AddTodo  onAddTodo={todoStore.onAddTodo}/>;
    }


    renderTodoList = () => {
        const { todoStore } = this.props;
        return <TodoList  filteredTodos={todoStore.filteredTodos} onRemoveTodo={todoStore.onRemoveTodo} jsonDataList={this.jsonDataList}/>;
    }


    renderTodoAppFooter = () => {
        const { activeTodosCount, onClearCompleted, completedTodosCount, onChangeSelectedFilter, selectedFilter } = this.props.todoStore;
        return <TodoFooter completedTodosCount = {completedTodosCount} activeTodosCount={activeTodosCount} onClearCompleted={onClearCompleted} onChangeSelectedFilter={onChangeSelectedFilter} selectedFilter={selectedFilter}  />;
    }


    componentDidMount() {
        this.doNetworkCalls();
    }


    doNetworkCalls = () => {
        console.log(this.props.todoStore);
        this.props.todoStore.getTodosApi();
    }


    renderTodosList = observer(({}) => {
        const { todos } = this.props.todoStore;
        if (todos.length === 0) {
            return <NoDataView/>;
        }
        else {
            return (
                <TodoDivision>
                        {this.renderTodoList()}
                        {this.renderTodoAppFooter()}   
                    </TodoDivision>
            );
        }
    });


    render() {
        const {
            getTodosApiStatus,
            getTodosApiError,
            activeTodosCount,
            selectedFilter,
            todos,
            filteredTodos,
            completedTodosCount
        } = this.props.todoStore;
        return (
            <TodoApp>
                 <Header>todos</Header>
                 {this.renderUserInput()}
                 <LoadingWrapperWithFailure 
                 // {...{filteredTodos,activeTodosCount,completedTodosCount}}
                     apiStatus={getTodosApiStatus}
                     apiError={getTodosApiError}
                     onRetryClick = {this.doNetworkCalls}
                     renderSuccessUI = {this.renderTodosList}
                 />
            </TodoApp>
        );
    }
}

export default withRouter(RestAPITodoApp);
