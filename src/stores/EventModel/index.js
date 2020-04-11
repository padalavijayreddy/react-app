//EventModels

import {observable,action} from 'mobx';

class Event{
    @observable id;
    @observable name;
    @observable address;
    
    constructor(data){
        this.id = Math.random().toString();
        this.name = data.name;
        this.address = data.address;
    }
    
    @action.bound
    onUpdateEventDetails(data){
        this.name=data.name;
        this.address=data.address;
    }
}

export default Event;
