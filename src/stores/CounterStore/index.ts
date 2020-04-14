import { observable, action } from 'mobx';
import { reaction } from 'mobx';

class CounterStore {
   @observable count:number;
   
   constructor(){
       this.count = 0
   }

   @action.bound
   incrementCounter() {
      if(isNaN(this.count)){
            this.count = 0;
            this.count = this.count + 1;
        }
        else {
            this.count = this.count + 1;
        }
   }

   @action.bound
   decrementCounter() {
        if(isNaN(this.count)){
            this.count = 0;
            this.count = this.count - 1;
        }
        else {
            this.count = this.count - 1;
        }
   }
   
   
   addReaction1 = reaction(
        () => this.count,
        (value) => {
            console.log('temp',value);
        }
    )
   
   @action.bound
   onChangeCount(event){
        let value = event.target.value;
        this.count = value;
    }
}

const counterStore = new CounterStore();
export default counterStore;
