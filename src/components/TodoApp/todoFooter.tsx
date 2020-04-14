import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';


@observer class TodoFooter extends React.Component{
    
    displayfunctions = (selectedFooter) => {
        this.props.onChangeSelectedFilter(selectedFooter)
    }
    
    render(){
        /*let activeItems = 0;
        let checkedTodos=this.props.footerdisplay.filter(items=>!items.done);
        activeItems = checkedTodos.length;
        console.log(activeItems,checkedTodos);*/
          return(
              <div className="display-footer">
                 <div class="items-left">{this.props.activeTodosCount} items Left</div>
                 <button onClick={()=> this.displayfunctions("ALL")} id="all" className="all">All</button>
                 <button onClick={()=> this.displayfunctions("ACTIVE")} id="active" className="active">Active</button>
                 <button onClick={()=> this.displayfunctions("COMPLETED")} id="completed" className="completed">Completed</button>
                 <button onClick={this.props.onClearCompleted} className="clear-completed">Clear Completed</button>
              </div>
         );
   }
}

export default TodoFooter;