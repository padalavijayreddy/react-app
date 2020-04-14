import React from 'react';
import { observer } from 'mobx-react';
import {observable } from 'mobx';

@observer class Event extends React.Component{
    
    @observable isEditEvent = false;
    @observable eventName = this.props.event.name;
    @observable eventAddress = this.props.event.address;
    
    onDeleteEvent = () => {
        const { event,onDeleteEvent } = this.props;
        onDeleteEvent(event.id);
    }
    
    onChangeEventName = (e) => {
        this.eventName= e.target.value;
    }
    
    onChangeEventAddress = (e) => {
        this.eventAddress = e.target.value;
    }
    
    onUpdateEventDetails = () => {
        const { event } = this.props;
        event.onUpdateEventDetails({name:this.eventName,address:this.eventAddress});
        this.isEditEvent=false;
    }
    
    render(){
        const { event,onDeleteEvent } = this.props;
        return(
           <div>
             {(this.isEditEvent)?
             <div className="flex border-1 border-black border-solid">
               <input type="text" placeholder="Name" value={this.eventName} onChange={this.onChangeEventName}/>
               <input type="text" placeholder="Location" value={this.eventAddress} onChange={this.onChangeEventAddress}/>
               <button onClick={this.onUpdateEventDetails}>Update</button>
             </div>:
             <div className="flex border-1 border-black border-solid">
               <name>Name:{event.name}</name>
               <address>Location:{event.address}</address>
               <button onClick={()=> this.isEditEvent = true}>Edit</button>
               <button onClick={this.onDeleteEvent}>Delete</button>
             </div>}
           </div>
           );
   } 
}

export default Event;