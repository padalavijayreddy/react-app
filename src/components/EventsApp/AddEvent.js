import React from 'react';
import { observer } from 'mobx-react';
import {observable } from 'mobx';

@observer class AddEvent extends React.Component{
    @observable name = '';
    @observable address = '';
    
    onAddEvent = (event) => {
        const { onAddEvent } = this.props;
        onAddEvent({name:this.name,address:this.address});
        this.name= this.address ='';
    }
    
    onChangeEventName = (event) => {
        this.name=event.target.value;
    }
    
    onChangeEventAddress = (event) => {
        this.address=event.target.value;
    }
    
    render(){
        return(
            <div className="flex border-2 border-black border-solid p-5 flex-row justify-between">
               <div className="flex flex-col justify-around" >
                 <input type="text" value={this.name} placeholder="Name" onChange={this.onChangeEventName}/>
                 <input type="text" value={this.address} placeholder="Location" onChange={this.onChangeEventAddress}/>
               </div>
               <div className="flex">
                 <button onClick={this.onAddEvent}>Add Event</button>
               </div>
            </div>
            );
    }
    
}

export default (AddEvent);