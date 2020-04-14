//TodoStore

import { observable,action,computed } from 'mobx';
import TodoModel,{TodoModelProps} from '../TodoModels';

class TodoStores {
    @observable todos: TodoModel[]//Array<TodoModel>
    @observable selectedFilter:string
    
    constructor(){
        todos = [],
        selectedFilter = 'ALL'
    }
    
    @action.bound
    onAddTodo(title:string){
        const todoObject : TodoModelProps = {
            id:Math.random().toString(),
            title,
            isCompleted:false
        }
        const todoInstance = new TodoModel(text)
        this.todos.push(todoInstance);
        console.log(this.todos,"Stores -> onAddTodo");
    }
    
    
    @action.bound
    onRemoveTodo(id) {
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