//TodoModel

import { observable,action } from 'mobx';

class TodoModel {
    @observable title
    @observable isCompleted
    
    constructor(text){
        this.id = text.id;
        this.title = text.title;
        this.isCompleted = text.completed;
    }
    
    onCompleteTodo = () =>{
        this.isCompleted=!this.isCompleted;
    }
    
    onUpdateTodoTitle = (changedText) => {
        this.title = changedText;
    }
}

export default TodoModel