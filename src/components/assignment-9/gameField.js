import React from 'react';
import Cell from './cell.js';
import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { Div } from './StyledComponents/gameFieldStyles';

@observer class GameField extends React.Component{
    
    renderEachCell = () => {
        const { selectTheme,isLevelChanged,cells,onCellClick,level,gridJsonData:{gridSize, gridWidth} } = this.props;
        return cells.map((eachCell)=>{
            return <Cell  
            key={eachCell.id} 
            id={eachCell.id} 
            cell={eachCell} 
            onCellClick={onCellClick} 
            level={level} 
            gridSize = {gridSize}
            gridWidth ={gridWidth}
            selectTheme = {selectTheme}
            isLevelChanged = { isLevelChanged }
            />;
        });
    }
    
    
    
    setTimerForPlaying = () => {
        
        const { level,goToInitialLevelAndUpdateCells } = this.props;
        
        this.timeoutId = setTimeout(()=>{
            goToInitialLevelAndUpdateCells();
        },(level + 3)*2000);
        
    }
    
    render(){
        
        const { selectTheme,gridJsonData,gridJsonData:{gridSize, gridWidth}, level} = this.props;
        
        const gridCss = {
            height: `${gridWidth+gridSize*2}px`,
            width: `${gridWidth+gridSize*2}px`
        };
        
        clearTimeout(this.timeoutId);
        
        if (level<7){
            this.setTimerForPlaying();
        }
        
        return(
            <Div 
            width = {gridCss}
            height = {gridCss}
            >
             {this.renderEachCell()}
            </Div>
            );
    }
}

export default GameField;