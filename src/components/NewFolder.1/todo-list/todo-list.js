import React from 'react';
import './todo-list.css';

//GLOBAL DECLARATIONS//

let universalListOfTodos = [];
let ActiveListOfTodos;
let newEachTodoId;
let RemainingItems;

//CLASSES


class TodoAppFooter extends React.Component{
    constructor(props){
        super(props);
    }
    
    displayfunctions = (selectedFooter) => {
        {this.props.displayfooterfunctions(selectedFooter)}
    }
    
    render(){
        let activeItems = 0;
        universalListOfTodos.forEach(items=>{
          if(items.done === false){
              activeItems += 1;
          }
        });
        if(this.props.footerdisplay.length>0){
          return(
              <div className="display-footer">
                 <div class="items-left">{activeItems} items Left</div>
                 <button onClick={()=> this.displayfunctions("All")} id="all" className="all">All</button>
                 <button onClick={()=> this.displayfunctions("Active")} id="active" className="active">Active</button>
                 <button onClick={()=> this.displayfunctions("Completed")} id="completed" className="completed">Completed</button>
                 <button onClick={()=> this.displayfunctions("ClearCompleted")} className="clear-completed">Clear Completed</button>
              </div>
         );
      }
      else{
          return(
              null
              );
      }
   }
}



class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            StateOfTodo:this.props.done,
            Value : this.props.todo,
        };
    }
    
    checkbox = (event) => {
        if(event.target.checked){
            this.setState({
                StateOfTodo:true,
            });
        }
        else{
            this.setState({
                StateOfTodo:false,
            });
        }
        this.props.updatingCheckbox(event.target.checked,this.props.id);
    }
    
    InputEditFunction = (event) => {
        this.setState({
            Value:event.target.value,
        });
        this.props.updatingInputValue(this.state.Value,this.props.id);
    }
    
    render(){
        return(
          <div className="content">
            <input defaultChecked={this.state.StateOfTodo} id="check" onClick={this.checkbox} type="checkbox" className="checking-button button-after-checking"></input>
            <input onChange={this.InputEditFunction} disabled={this.state.StateOfTodo} type="text" className="content-input" defaultValue={this.props.todo} name="" />
            <button className="delete-button" onClick={this.props.removeTodoFromTodosList} id={this.props.id}>❌</button>
          </div>
       );
    }
}



class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {TodoItems: [],eachId:0};
    }
    
    userInput = (event)=> {
        if (event.keyCode === 13) {
            let newTodo = event.target.value;
            if (newTodo) {
                universalListOfTodos = this.state.TodoItems.slice(0);
                newEachTodoId = this.state.eachId += 1;
                universalListOfTodos.push({id:newEachTodoId, todo:newTodo, done:false});
                event.target.value = '';
                this.setState({
                    TodoItems : universalListOfTodos,
                    eachId:newEachTodoId
                });
            }
        }
    }
    
    GetTodoList=()=>{
        return this.state.TodoItems.map(eachItem => {
            return <TodoApp  key={eachItem.id} id={eachItem.id} todo={eachItem.todo} done={eachItem.done}
            removeTodoFromTodosList ={this.OnRemoveTodo}
            updatingCheckbox = {this.updatingCheckboxinList}
            updatingInputValue = {this.updatingInputValueinList}
            />;
        });
    }
    
    OnRemoveTodo = (event) => {
          let remainingTodoList = this.state.TodoItems.filter((item)=>
              item.id !== Number(event.target.id),
          );
          universalListOfTodos = remainingTodoList;
          this.setState({
              TodoItems : remainingTodoList
          });
    }
    
    updatingCheckboxinList = (disabled,id) => {
        let updateCheckbox = universalListOfTodos.map(items => {
            if(items.id === id){
                items.done = disabled;
            }
        });
        this.setState({
            universalListOfTodos:updateCheckbox,
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
                this.setState({
                    TodoItems : ActiveItems
                });
                break;
            case "Completed":
                let Completed = universalListOfTodos.filter(items => {
                    return items.done === true; 
                });
                this.setState({
                    TodoItems : Completed
                });
                break;
            case "All":
                this.setState({
                    TodoItems : universalListOfTodos
                });
                break;
            case "ClearCompleted":
                let ClearCompleted = universalListOfTodos.filter(items =>{
                    return items.done == false;
                });
                universalListOfTodos = ClearCompleted;
                this.setState({
                    TodoItems : ClearCompleted
                });
        }
    }
    
    render(){
        return (
          <div className="todoapp" id="todo">
              <div className="heading">todos</div>
              <div className="card">
                <input autoFocus type="text" id="givenInput" aria-label="Enter a new todo item" placeholder="What needs to be done?" className="todo-input"  onKeyDown={this.userInput}/>
                <div>{this.GetTodoList()}</div>
                <div>
                    <TodoAppFooter footerdisplay={universalListOfTodos} displayfooterfunctions={this.displayFooter}  activeItems={RemainingItems}/>
                </div>
              </div>
          </div>
        );
    }
}



export { TodoList };






























/*import React from 'react';
import './todo-list.css';


//GLOBAL DECLARATIONS//



//CLASSES

class TodoAppFooter extends React.Component{
    constructor(props){
        super(props);
    }
    
    All = () => {
        
    }
    
    render(){
        if(this.props.footerdisplay.length>0){
          return(
              <div>
                 <button onClick={this.All} id="all" className="all">All</button>
                 <button id="active" className="active">Active</button>
                 <button id="completed" className="completed">Completed</button>
                 <button className="clear-completed">Clear Completed</button>
              </div>
         );
      }
      else{
          return(
              null
              );
      }
   }
}



class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled:false,
        };
    }
    
    checkbox = (event) => {
        if(event.target.checked){
            this.setState({
                disabled:true,
            });
        }
        else{
            this.setState({
                disabled:false,
            });
        }
    }
    
    
    render(){
        {this.props.updating(this.state.disabled,this.props.id)}
        return(
          <div className="content">
            <input id="check" onClick={this.checkbox} type="checkbox" className="checking-button button-after-checking"></input>
            <input disabled={this.state.disabled == true? true:false} type="text" className="content-input" defaultValue={this.props.todo} name="" />
            <button className="delete-button" onClick={this.props.removeTodoFromTodosList} id={this.props.id}>❌</button>
          </div>
       );
    }
}




class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {TodoItems: [],eachId:0};
    }
    
    userInput = (event)=> {
        if (event.keyCode === 13) {
            let newTodo = event.target.value;
            if (newTodo) {
                const universalListOfTodos = this.state.TodoItems.slice(0);
                const newEachTodoId = this.state.eachId += 1;
                universalListOfTodos.push({id:newEachTodoId, todo:newTodo, done:false});
                event.target.value = '';
                this.setState({
                    TodoItems : universalListOfTodos,
                    eachId:newEachTodoId
                });
            }
        }
    }
    
    GetTodoList=()=>{
        return this.state.TodoItems.map(eachItem => {
            return <TodoApp  key={eachItem.id} id={eachItem.id} todo={eachItem.todo} done={eachItem.done}
            removeTodoFromTodosList ={this.OnRemoveTodo}
            updating = {this.updatingCheckboxinList}/>;
        });
    }
    
    OnRemoveTodo = (event) => {
          let remainingTodoList = this.state.TodoItems.filter((item)=>
              item.id !== Number(event.target.id),
          );
          this.setState({
              TodoItems : remainingTodoList
          });
    }
    
    updatingCheckboxinList = (disabled,id) => {
        this.state.TodoItems.map(items => {
            if(items.id === id){
                items.done = disabled;
            }
            console.log(this.state.TodoItems);
        });
    }
    
    render(){
        return (
          <div className="todoapp" id="todo">
              <div className="heading">todos</div>
              <div className="card">
                <input autoFocus type="text" id="givenInput" aria-label="Enter a new todo item" placeholder="What needs to be done?" className="todo-input"  onKeyDown={this.userInput}/>
                <div>{this.GetTodoList()}</div>
                <div><TodoAppFooter footerdisplay={this.state.TodoItems}/></div>
              </div>
          </div>
        );
    }
}




export { TodoList };

*/
































/*let input = document.getElementById("givenInput");
let addingTodoList = document.getElementById("todoList");
let items = document.getElementById("results");
let footer = document.getElementById("footer");
let allTodo = document.getElementById("all");
let activeTodo = document.getElementById("active");
let completedTodo = document.getElementById("completed");
let count = 0;

function addToDo(newTodo) {
    const text = `<div class="content">
            <input id="check" type="checkbox" class="checking-button button-after-checking"></input>
            <input type="text" class="content-input" value="${newTodo}" name="" />
            <button class="delete-button">X</button>
          </div>`;
    addingTodoList.insertAdjacentHTML('beforeend', text);
    count += 1;
    items.innerHTML = `${count} items left`;

}

input.addEventListener("keypress", function(keyPressed) {
    if (keyPressed.which === 13) {
        footer.style.display = "flex";
        let newTodo = this.value;
        if (newTodo) {
            addToDo(newTodo);
            this.value = '';
        }
    }
});


function addingBorder(element1, element2, element3) {
    element1.style.border = "1px solid black";
    element2.style.border = "none";
    element3.style.border = "none";
}

document.addEventListener("click", function(event) {
    if (event.target.className == "delete-button" && confirm("Want to delete?")) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        if (event.target.parentNode.children[0].checked == false) {
            count -= 1;
            items.innerHTML = `${count} items left`;
        }
        if (count == 0 && addingTodoList.children.length == 0) {
            footer.style.display = "none";
        }
    }

    if (event.target.type == "checkbox") {
        if (event.target.checked) {
            event.target.nextElementSibling.style.textDecoration = "line-through";
            event.target.nextElementSibling.disabled = true;
            count -= 1;
            items.innerHTML = `${count} items left`;
        }
        else {
            event.target.nextElementSibling.style.textDecoration = "";
            event.target.nextElementSibling.disabled = false;
            count += 1;
            items.innerHTML = `${count} items left`;
        }
    }
    if (event.target.className == "active") {
        addingBorder(activeTodo, allTodo, completedTodo);
        for (let i of addingTodoList.children) {
            if (i.children[0].checked) {
                i.style.display = 'none';
            }
            else {
                i.style.display = 'flex';
            }
        }
    }
    if (event.target.className == "completed") {
        addingBorder(completedTodo, allTodo, activeTodo);
        for (let i of addingTodoList.children) {
            if (i.children[0].checked) {
                i.style.display = 'flex';
            }
            else {
                i.style.display = 'none';
            }
        }
    }
    if (event.target.className == "all") {
        addingBorder(allTodo, activeTodo, completedTodo);
        for (let i of addingTodoList.children) {
            if (i.children[0].checked) {
                i.style.display = 'flex';
            }
            else {
                i.style.display = 'flex';
            }
        }
    }
    if (event.target.className == "clear-completed") {
        let length = addingTodoList.children.length;
        console.log(addingTodoList.children);
        for (let i = 0; i < length; i++) {
            if (addingTodoList.children[i].children[0].checked) {
                addingTodoList.children[i].remove();
                i -= 1;
            }
            if (count == 0 && addingTodoList.children.length == 0) {
                footer.style.display = "none";
            }
        }
    }
});*/






// //Write your javascript logic here

// let input = document.getElementById("givenInput");
// let addingTodoList = document.getElementById("todoList");
// let items = document.getElementById("results");
// let footer = document.getElementById("footer");
// let allTodo = document.getElementById("all");
// let activeTodo = document.getElementById("active");
// let completedTodo = document.getElementById("completed");
// let count = 0;

// let list = [],
//     let id = 0

// function addToDo(newTodo) {
//     const text = `<div class="content">
//             <input id="check" type="checkbox" class="checking-button button-after-checking"></input>
//             <input type="text" class="content-input" value="${newTodo}" name="" />
//             <button class="delete-button">X</button>
//           </div>`;
//     addingTodoList.insertAdjacentHTML('beforeend', text);
//     count += 1;
//     items.innerHTML = `${count} items left`;

// }

// input.addEventListener("keypress", function(keyPressed) {
//     if (keyPressed.which === 13) {
//         footer.style.display = "flex";
//         let newTodo = this.value;
//         if (newTodo) {
//             addToDo(newTodo);
//             list.push({
//                 name: newTodo,
//                 id: id,
//                 done: false,
//                 trash: false
//             });
//             this.value = '';
//         }
//     }
// });


// function addingBorder(element1, element2, element3) {
//     element1.style.border = "1px solid black";
//     element2.style.border = "none";
//     element3.style.border = "none";
// }

// document.addEventListener("click", function(event) {
//     if (event.target.className == "delete-button" && confirm("Want to delete?")) {
//         event.target.parentNode.parentNode.removeChild(event.target.parentNode);
//         if (event.target.parentNode.children[0].checked == false) {
//             count -= 1;
//             items.innerHTML = `${count} items left`;
//         }
//         if (count == 0 && addingTodoList.children.length == 0) {
//             footer.style.display = "none";
//         }
//     }

//     if (event.target.type == "checkbox") {
//         if (event.target.checked) {
//             event.target.nextElementSibling.style.textDecoration = "line-through";
//             event.target.nextElementSibling.disabled = true;
//             count -= 1;
//             items.innerHTML = `${count} items left`;
//         }
//         else {
//             event.target.nextElementSibling.style.textDecoration = "";
//             event.target.nextElementSibling.disabled = false;
//             count += 1;
//             items.innerHTML = `${count} items left`;
//         }
//     }
//     if (event.target.className == "active") {
//         addingBorder(activeTodo, allTodo, completedTodo);
//         for (let i of addingTodoList.children) {
//             if (i.children[0].checked) {
//                 i.style.display = 'none';
//             }
//             else {
//                 i.style.display = 'flex';
//             }
//         }
//     }
//     if (event.target.className == "completed") {
//         addingBorder(completedTodo, allTodo, activeTodo);
//         for (let i of addingTodoList.children) {
//             if (i.children[0].checked) {
//                 i.style.display = 'flex';
//             }
//             else {
//                 i.style.display = 'none';
//             }
//         }
//     }
//     if (event.target.className == "all") {
//         addingBorder(allTodo, activeTodo, comple - tedTodo);
//         for (let i of addingTodoList.children) {
//             if (i.children[0].checked) {
//                 i.style.display = 'flex';
//             }
//             else {
//                 i.style.display = 'flex';
//             }
//         }
//     }
//     if (event.target.className == "clear-completed") {
//         let length = addingTodoList.children.length;
//         console.log(addingTodoList.children);
//         for (let i = 0; i < length; i++) {
//             if (addingTodoList.children[i].children[0].checked) {
//                 addingTodoList.children[i].remove();
//                 i -= 1;
//             }
//             if (count == 0 && addingTodoList.children.length == 0) {
//                 footer.style.display = "none";
//             }
//         }
//     }
// });







