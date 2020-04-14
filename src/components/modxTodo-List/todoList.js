import React from 'react';
import './todo-list.css';
import { IoMdArrowBack } from "react-icons/io";
import {withRouter} from 'react-router-dom';
import TodoApp from './todosApp';
import TodoAppFooter from './todoAppFooter';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

//GLOBAL DECLARATIONS//

let universalListOfTodos = [];
let newEachTodoId;
let RemainingItems;

//CLASSES

@observer class TodosList extends React.Component{
    
    @observable states = {TodoItems: [],eachId:0,stateOfInput:false};
    
    userInput = (event)=> {
        if (event.keyCode === 13) {
            let newTodo = event.target.value;
            if (newTodo) {
                universalListOfTodos = this.states.TodoItems.slice(0);
                newEachTodoId = this.states.eachId += 1;
                universalListOfTodos.push({id:newEachTodoId, todo:newTodo, done:false});
                event.target.value = '';
                this.states.TodoItems = universalListOfTodos;
                this.states.eachId = newEachTodoId;
            }
        }
    }
    
    GetTodoList=()=>{
        console.log(this.states.TodoItems);
        return this.states.TodoItems.map(eachItem => {
            return <TodoApp  key={eachItem.id} id={eachItem.id} todo={eachItem.todo} done={eachItem.done}
            removeTodoFromTodosList ={this.OnRemoveTodo}
            updatingCheckbox = {this.updatingCheckboxinList}
            updatingInputValue = {this.updatingInputValueinList}
            />;
        });
    }
    
    OnRemoveTodo = (event) => {
          let remainingTodoList = this.states.TodoItems.filter((item)=>
              item.id !== Number(event.target.id),
          );
          universalListOfTodos = remainingTodoList;
          this.states.TodoItems = remainingTodoList;
    }
    
    updatingCheckboxinList = (disabled,id) => {
        console.log('universalListOfTodos',universalListOfTodos);
        universalListOfTodos.forEach(items => {
            console.log(items.id,id);
            if(items.id === id){
                items.done = disabled;
            }
            
        });
    }
    
    updatingInputValueinList = (value,id) => {
        universalListOfTodos.map(items => {
            if(items.id === id){
                items.todo = value;
            }
        });
    }
    
    displayFooter = (cases) => {
        switch(cases){
            case "Active":
                let ActiveItems = universalListOfTodos.filter(items => {
                   return items.done === false;
                    });
                RemainingItems = ActiveItems.length;
                this.states.TodoItems = ActiveItems;
                this.states.stateOfInput = true;
                break;
            case "Completed":
                let Completed = universalListOfTodos.filter(items => {
                    return items.done === true; 
                });
                this.states.TodoItems = Completed;
                this.states.stateOfInput = true;
                break;
            case "All":
                this.states.TodoItems = universalListOfTodos;
                this.states.stateOfInput = false;
                break;
            case "ClearCompleted":
                let ClearCompleted = universalListOfTodos.filter(items =>{
                    return items.done == false;
                });
                universalListOfTodos = ClearCompleted;
                this.states.TodoItems = ClearCompleted;
                this.states.stateOfInput = true;
        }
        console.log(this.states.TodoItems);
    }
    
    goBack = () =>{
      this.props.history.goBack();
     }
    
    render(){
        console.log('vijay');
        return (
          <div className="todoapp" id="todo">
              <button className="flex justify-start items-center h-12 bg-black text-white text-lg w-full" type="button" onClick={this.goBack}><IoMdArrowBack/><b>Go Back</b></button>
              <div className="heading">todos</div>
              <div className="card">
                <input autoFocus type="text" id="givenInput" aria-label="Enter a new todo item" placeholder="What needs to be done?" className="todo-input" disabled={this.states.stateOfInput}  onKeyDown={this.userInput}/>
                <div>{this.GetTodoList()}</div>
                <div>
                    <TodoAppFooter footerdisplay={universalListOfTodos} displayfooterfunctions={this.displayFooter}  activeItems={RemainingItems}/>
                </div>
              </div>
          </div>
        );
    }
}



export default withRouter( TodosList );
