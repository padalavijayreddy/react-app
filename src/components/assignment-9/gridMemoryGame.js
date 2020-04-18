import React from 'react';
import gridStores, {gridJsonObjectList} from '../../stores/GridStores';
import GameField from './gameField';
import GameResult from './gameResult.js';
import Header from './header.js';
import { observer } from 'mobx-react';
import { Div,GridGame } from './StyledComponents/gridMemoryGameStyles';
  

@observer
class GridMemoryGame extends React.Component{
  
    render(){
        const { isGameCompleted,currentLevelGridCells,extraLife,onCellClick,level,topLevel,goToInitialLevelAndUpdateCells,goToNextLevelAndUpdateCells,onPlayAgainClick,isLevelChanged } = gridStores;
        const { selectedTheme,onChangeTheme } = this.props;
        return(
            <GridGame 
            className={`${selectedTheme.style}`}>
             <Div 
             state={ gridJsonObjectList[level].gridWidth }>
               <Header 
                  extraLife = { extraLife }
                  selectTheme = { selectedTheme } 
                  changeTheme = { onChangeTheme } 
                  level={ level } 
                  topLevel={ topLevel } 
                  goToNextLevelAndUpdateCells={ goToNextLevelAndUpdateCells }/>
               <div 
               state={ gridJsonObjectList[level].gridWidth }>
                  { (isGameCompleted === false)?
                  <GameField
                      gridJsonData={ gridJsonObjectList[level] } 
                      isLevelChanged={ isLevelChanged } 
                      selectTheme = { selectedTheme } 
                      cells = { currentLevelGridCells } 
                      onCellClick = { onCellClick } 
                      level = { level } 
                      goToInitialLevelAndUpdateCells = { goToInitialLevelAndUpdateCells }/>:
                 <GameResult 
                      selectTheme = { selectedTheme } 
                      level={ level } 
                      onPlayAgainClick={ onPlayAgainClick } /> }
               </div>
             </Div>
            </GridGame>
            );
    }
} 

export default GridMemoryGame;