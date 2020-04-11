import React from 'react';
import Event from '../../stores/EventModel/index.js';
import { observer } from 'mobx-react';
import {observable } from 'mobx';
import eventStore  from '../../stores/EventStore';
import AddEvent from './AddEvent.js';
import EventList from './EventList.js';

@observer class EventsApp extends React.Component{
    render(){
        const { onAddEvent,events,onDeleteEvent,noOfEvents } = eventStore;
        return(
            <div>
              <AddEvent onAddEvent={onAddEvent}/>
              <EventList events={events} onDeleteEvent={onDeleteEvent} noOfEvents={noOfEvents}/>
            </div>
            );
    }
}


export default EventsApp;