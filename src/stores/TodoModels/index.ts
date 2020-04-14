//TodoModel

import { observable,action } from 'mobx';

export type TodoModelProps={
    id:string
    title:string
    isCompleted:boolean
}

class TodoModel {
    @observable title:string
    @observable isCompleted:boolean
    
    constructor(text:TodoModelProps){
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