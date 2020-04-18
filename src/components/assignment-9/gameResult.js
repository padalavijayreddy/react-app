import React from 'react';
import gridStores, {gridJsonObjectList} from '../../stores/GridStores';


class GameResult extends React.Component{
    
    render(){
        const { extraLife } = gridStores;
        const { level,onPlayAgainClick,selectTheme } = this.props;
        
        return(
            <div 
            className={`items-center justify-around h-64 w-64 flex flex-col`} >
              {/*<b 
              className="text-2xl font-2xl font-serif font-bold">{level}
              </b>*/}
              <b 
              className="text-2xl font-2xl font-serif font-bold">Points: {extraLife*100}
              </b>
              <b 
              className="flex text-center text-3xl whitespace-no-wrap text-green-600 font-lg font-serif font-bold">Congratulations! You completed all the levels
              </b>
              <button 
              className="w-24 p-1 bg-blue-500 rounded-lg" onClick={onPlayAgainClick}>Play Again
              </button>
            </div>
            );
    }
}

export default GameResult;