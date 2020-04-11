import { observable,action } from 'mobx';

class TodoModel {
    @observable title
    @observable isCompleted
    
    constructor(text){
        this.id = Math.random().toString();
        this.title = text;
        this.isCompleted = false;
    }
    
    @action.bound
    onCompleteTodo(){
        this.isCompleted=!this.isCompleted;
    }
    
    @action.bound
    onUpdateTodoTitle(changedText){
        this.title= changedText;
    }
}

export default (TodoModel);