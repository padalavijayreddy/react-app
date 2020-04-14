//TodoModel

import { observable,action } from 'mobx';

class TodoModel {
    @observable title
    @observable isCompleted
    
    constructor(text){
        this.id = text.id;
        this.title = text.title;
        this.isCompleted = text.isCompleted;
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

export default TodoModel