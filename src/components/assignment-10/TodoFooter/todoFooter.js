import React from 'react';
import {withRouter} from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Footer,ItemsCount,Filterbutton } from './todoFooterStyle';


@observer class TodoFooter extends React.Component{
    
    displayfunctions = (selectedFooter) => {
        this.props.onChangeSelectedFilter(selectedFooter);
    }
    
    render(){
        const {selectedFilter,activeTodosCount,completedTodosCount} = this.props;
        if((activeTodosCount > 0) || (completedTodosCount > 0)){
            return(
              <Footer>
                 <ItemsCount>{this.props.activeTodosCount} items Left</ItemsCount>
                 <Filterbutton border={selectedFilter==="ALL"} onClick={()=> this.displayfunctions("ALL")} id="all" className="all">All</Filterbutton>
                 <Filterbutton border={selectedFilter==="ACTIVE"} onClick={()=> this.displayfunctions("ACTIVE")} id="active" className="active">Active</Filterbutton>
                 <Filterbutton border={selectedFilter==="COMPLETED"}  onClick={()=> this.displayfunctions("COMPLETED")} id="completed" className="completed">Completed</Filterbutton>
                 <button onClick={this.props.onClearCompleted} className="clear-completed">Clear Completed</button>
              </Footer>
              );
        }
        else{
            return(
                <div></div>
                );
        }
   }
}

export default TodoFooter;