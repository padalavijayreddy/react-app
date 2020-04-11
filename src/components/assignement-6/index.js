import React from "react";
import { withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import counterStore from '../../stores/CounterStore';
import { reaction } from 'mobx';



@observer class CounterApp extends React.Component{
    
    onIncrement = () => {
        counterStore.incrementCounter();
    }
    
    onDecrement = () => {
        counterStore.decrementCounter();
    }
    
    onChangeCount =  (event) => {
        counterStore.onChangeCount(event);
    }
    
    addReaction2 = reaction(
        () => this.count,
        (value) => {
            console.log('temp',value);
        }
    )
    
    
    
    render(){
        return (
            <div className ="flex flex-col justify-center items-center h-screen w-screen">
              <div className="flex justify-center h-20 items-center w-full">
                <h1 className="text-lg font-sans self-center"><b>Counter App</b></h1>
              </div>
              <div className ="flex w-full h-20  items-center justify-center">
               <button onClick={this.onIncrement} className="h-12 w-20 bg-blue-700 rounded-lg text-white"> + </button>
               <input  onChange={this.onChangeCount} className="text-lg text-center items-center w-24 h-16 border-black border-solid border-2 m-5 rounded-lg" type="text" value={counterStore.count}/>
               <button onClick={this.onDecrement} className="h-12 w-20 bg-blue-700 rounded-lg text-white"> - </button>
              </div> 
            </div>
            );
    }
}

export default withRouter( CounterApp );