//EventStores


import { observable,computed,action } from 'mobx';

import Event from '../EventModel/index';


class EventStore{
    @observable events = [];
    
    @action.bound
    onAddEvent(data){
        this.events.push(new Event(data));
    }
    
    @action.bound
    onDeleteEvent(id){
        this.events = this.events.filter(items => items.id!==id);
    }
    
    @computed
    get noOfEvents(){
        return this.events.length;
    }
    
}

let eventStore = new EventStore();
export default eventStore;