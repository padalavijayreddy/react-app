import React from 'react';
import {withRouter} from 'react-router-dom';


class TodoAppFooter extends React.Component{
    constructor(props){
        super(props);
    }
    
    displayfunctions = (selectedFooter) => {
        {this.props.displayfooterfunctions(selectedFooter)}
    }
    
    render(){
        let activeItems = 0;
        let checkedTodos=this.props.footerdisplay.filter(items=>!items.done);
        activeItems = checkedTodos.length;
        console.log(activeItems,checkedTodos);
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



export default withRouter( TodoAppFooter );