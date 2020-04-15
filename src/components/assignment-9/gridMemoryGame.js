import React from 'react';
import gridStores from '../../stores/GridStores';
import GameField from './gameField';
import GameResult from './gameResult.js';

class GridMemoryGame extends React.Component{
    
    render(){
        const { isGameCompleted,currentLevelGridCells } = gridStores;
        console.log(currentLevelGridCells);
        return(
            <div>
              <header/>
              
              <div>
                { (isGameCompleted === false)?<GameField />:<GameResult />}
              </div>
              
            </div>
            );
    }
} 

export default GridMemoryGame;