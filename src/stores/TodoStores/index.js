//TodoStore

import { observable, action, computed } from 'mobx';
import TodoModel from '../TodoModels';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';


class TodoStores {
    @observable todos
    @observable selectedFilter
    @observable getTodosApiStatus
    @observable getTodosApiError
    todosService

    constructor(todosService) {
        this.todosService = todosService;
        this.init();
    }

    @action.bound
    init() {
        this.todos = [];
        this.selectedFilter = 'ALL';
        this.getTodosApiError = null;
        this.getTodosApiStatus = API_INITIAL;
    }

    @action.bound
    clearStore() {
        this.init();
    }

    @action.bound
    getTodosApi() {
        const todosPromise = this.todosService.getTodosApi();
        return bindPromiseWithOnSuccess(todosPromise)
            .to(this.setTodosApiStatus, this.setTodosApiResponse)
            .catch(this.setTodosApiError);
    }


    @action.bound
    setTodosApiStatus(apiStatus) {
        this.getTodosApiStatus = apiStatus;
    }


    @action.bound
    setTodosApiError(apiError) {
        this.getTodosApiError = apiError;
    }



    @action.bound
    setTodosApiResponse(todosResponse) {
        this.todos = todosResponse.map((eachObject) => new TodoModel(eachObject));
    }


    @action.bound
    onAddTodo(title) {
        const todoObject = {
            id: Math.random().toString(),
            title,
            completed: false
        };
        this.todos.push(new TodoModel(todoObject));
    }

@action.bound
onRemoveTodo(id) {
    this.todos = this.todos.filter(items => items.id !== id);
}

    @action.bound
    onChangeSelectedFilter(changedFilter) {
        this.selectedFilter = changedFilter;
    }

    @action.bound
    onClearCompleted() {
        this.todos = this.todos.filter(items => items.isCompleted === false);
    }


    @computed
    get filteredTodos() {
        if (this.selectedFilter === "ALL")
            return this.todos;
        else if (this.selectedFilter === "ACTIVE")
            return this.todos.filter(todo => !todo.isCompleted);
        else if (this.selectedFilter === "COMPLETED")
            return this.todos.filter(todo => todo.isCompleted);
    }

    @computed
    get completedTodosCount() {
        return this.todos.filter(todo => todo.isCompleted).length;
    }


    @computed
    get activeTodosCount() {
        return this.todos.filter(todo => !todo.isCompleted).length;
    }

}

export default TodoStores;
