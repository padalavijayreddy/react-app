import React from 'react';
import { observable } from 'mobx';
import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import tw from 'tailwind.macro';
import { Button } from './StyledComponents/cellStyles';


@observer class Cell extends React.Component{
    
    @observable shouldShowHiddenCells=true;
    @observable isClickedOnCell=false;
    background = '#294264'
    
    
    onCellClick = (event) => {
        let id= event.target.id;
        const {onCellClick} = this.props;
        
        if (!this.isClickedOnCell){
            this.isClickedOnCell=true;
            onCellClick(id);
        }
    }
    
    
    componentDidMount(){
        const { level } = this.props;
        
        setTimeout(()=>{
            this.shouldShowHiddenCells=false;
        },(level + 3)*1000);
    }
    
    
    render(){
        
        const { cell:{isHidden},id,gridSize,isLevelChanged, gridWidth,selectTheme:{name} } = this.props;
        
        let { background } = this;
        
        const cellStyle = {
            width:`${gridWidth/gridSize}px`,
            height:`${gridWidth/gridSize}px`
        };
        
        if((isHidden && this.shouldShowHiddenCells) || (isHidden && this.isClickedOnCell) ){
            background = (name === 'Light Mode')?'#38A169':'#5DBCD2';
        }
        
        else if(!isHidden && this.isClickedOnCell){
            background = '#e53e3e';
        }
        
        else {
            background = (name === 'Light Mode')?'#4A5568':'#294264';
        }
        
        return(
            <Button 
            width={cellStyle}
            height={cellStyle}
            disabled={this.shouldShowHiddenCells||isLevelChanged}
            state = {background}
            id={id} onClick={this.onCellClick}>{(isHidden)?'Y':''}</Button>
            );
    }
}

export default Cell;