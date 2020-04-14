import React from 'react';
import { observer } from 'mobx-react';
import {observable } from 'mobx';
import Event from './Event';

@observer class EventList extends React.Component{
    getEventList = () =>{
        const { events,onDeleteEvent } = this.props;
        console.log(events);
        return events.map(eachEvent => { 
            return <Event key ={eachEvent.id} event={eachEvent} onDeleteEvent={onDeleteEvent}/>
        });
    }
    render(){
        const { noOfEvents } = this.props;
        return (
            <div>
              <p>No of Events: {noOfEvents}</p>
              {this.getEventList()}
            </div>
            );
    }
}

export default EventList;