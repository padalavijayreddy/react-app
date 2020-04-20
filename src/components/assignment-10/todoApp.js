/*global fetch*/

import React from 'react';
import {withRouter} from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Offline, Online } from "react-detect-offline";

import AddTodo from './addTodo';
import TodoList from './todoList';
import TodoFooter from './todoFooter';

import todoStores from '../../stores/TodoStores/index';
import TodoModel from '../../stores/TodoModels/index';

@observer class RestAPITodoApp extends React.Component{
    
    @observable stateOfData = "LOADING"
    
    
    renderUserInput = () => {
        return <AddTodo />;
    }
    
    
    renderTodoList = () => {
        return <TodoList  filteredTodos={todoStores.filteredTodos} onRemoveTodo={todoStores.onRemoveTodo} jsonDataList={this.jsonDataList}/>;
    }
    
    
    renderTodoAppFooter = () => {
        const { activeTodosCount, onClearCompleted, onChangeSelectedFilter, selectedFilter} = todoStores;
        return <TodoFooter activeTodosCount={activeTodosCount} onClearCompleted={onClearCompleted} onChangeSelectedFilter={onChangeSelectedFilter} selectedFilter={selectedFilter}  />;
    }
    
    
    componentDidMount(){
        this.getDataUsingFetch();
    }
    
    
    getDataUsingFetch = () => {
      const { addDataToTodos } = todoStores;
      fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response => response.json())
         .then(response =>{
             if(this.stateOfData === "LOADING" && response.length==0){
                 this.stateOfData = "EMPTY";
             }
             else{
             this.stateOfData = "FETCHED";
             addDataToTodos(response);
             }
         })
         .catch(response=>{
             console.log(Error);
             this.stateOfData = "FAILURE";
         }); 
    }
    
    
    render(){
        const { todos } = todoStores
        console.log(this.stateOfData);
        return(
        <div className="flex flex-col w-64 h-screen ">
              {this.renderUserInput()}
              
              {(todos.length > 0)?
              <div></div>:
              <div className='flex justify-center items-center'>
                  {(this.stateOfData === 'LOADING')?<svg width="100" height="100" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#00BFFF" aria-label="audio-loading"><circle cx="15" cy="15" r="14.3989"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9.60108" attributeName="fillOpacity" from="1" to="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fillOpacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="14.3989"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>:''}
                  {(this.stateOfData === 'FAILURE')?<div><Offline>Network Error</Offline><button onClick = {this.getDataUsingFetch}> RETRY </button></div>:''}
                  {(this.stateOfData === 'EMPTY')?<div><b>NO DATA FOUND</b></div>:''}
              </div>
              }
              {this.renderTodoList()}
              {this.renderTodoAppFooter()}
            </div>
            );
    }
}

export default withRouter( RestAPITodoApp );