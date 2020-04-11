import { observable,action,computed } from 'mobx';
import TodoModel from '../TodoModels/index.js';


class TodoStores {
    @observable todos = [];
    @observable selectedFilter = 'ALL';

    @action.bound
    onAddTodo(text){
        this.todos.push(new TodoModel(text));
        console.log(this.todos);
    }
    
    @action.bound
    onRemoveTodo(id){
        this.todos = this.todos.filter(items => items.id!==id);
    }
    
    @action.bound
    onChangeSelectedFilter(changedFilter){
        this.selectedFilter=changedFilter;
    }
    
    @action.bound
    onClearCompleted(){
        this.todos = this.todos.filter(items => items.isCompleted === false);
    }
    
    @computed
    get filteredTodos(){
        if (this.selectedFilter === "ALL")
            return this.todos;
        else if(this.selectedFilter === "ACTIVE")
            return this.todos.filter(todo => !todo.isCompleted);
        else if (this.selectedFilter === "COMPLETED")
            return this.todos.filter(todo => todo.isCompleted);
    }
    @computed 
    get activeTodosCount(){
        return this.todos.filter(todo => !todo.isCompleted).length;
    }
}

let todoStores = new TodoStores;
export default (todoStores);