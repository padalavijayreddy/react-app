import React from "react";
import { withRouter } from 'react-router-dom';

class WinOrLose extends React.Component{
    render(){
        const { setTopScore,resetGame,gameState,selectedTheme,score } = this.props;
        return(
              <div className={`h-screen w-screen flex flex-col justify-center items-center ${selectedTheme.winOrLose}`}>
                 <span className="m-5"><b>{score}</b></span>
                 <span className="m-5">{(gameState === 'LOSE')? 'YOU LOSE' : 'YOU WON'}</span>
                 <button className="text-lg bg-blue-800 w-1/4" onClick={resetGame}>Play Again</button>
                 
              </div>
            );
    }
}

export default withRouter(WinOrLose);