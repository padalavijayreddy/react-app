import React from 'react';
import { observer } from 'mobx-react';
import {observable } from 'mobx';


import AddEvent from './AddEvent';
import EventList from './EventList';

import Event from '../../stores/EventModel/index';
import eventStore  from '../../stores/EventStore';


@observer class EventsApp extends React.Component{
    render(){
        const { onAddEvent,events,onDeleteEvent,noOfEvents } = eventStore;
        return(
            <div className="bg-blue-400">
              <AddEvent onAddEvent={onAddEvent}/>
              <EventList events={events} onDeleteEvent={onDeleteEvent} noOfEvents={noOfEvents}/>
            </div>
            );
    }
}


export default EventsApp;