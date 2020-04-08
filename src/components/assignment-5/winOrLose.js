import React from "react";
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

const Span = styled.span(
    props => ({
        color:(props.state === 'LOSE')?'red':'green'
    })
);

class WinOrLose extends React.Component{
    
    /*remainingImages = () => {
        const { selectedTheme,emojis } = this.state;
        return emojis.map((eachCard) =>{
            if(eachCard.isClicked == 'false'){
                return <EmojiCard onClickEmojiCard = {this.onEmojiClick} selectedTheme={selectedTheme} id={eachCard.id} isClicked={eachCard.isClicked} 
                name={eachCard.name} image={eachCard.image}/>;
            }
        });
    }*/
    
    render(){
        const { emojis,resetGame,gameState,selectedTheme,score } = this.props;
        return(
              <div className={`h-screen w-screen flex flex-col justify-center items-center ${selectedTheme.winOrLose}`}>
                 {/*<div className="border-2 border-black border-solid">{this.remainingImages(emojis)}</div>*/}
                 <span className="m-5 text-lg font-sans"><b>{score}</b></span>
                 <Span state={gameState} className="m-5 text-lg font-sans">{(gameState === 'LOSE')? 'YOU LOSE' : 'YOU WON'}</Span>
                 <button className="text-lg bg-blue-800 w-24 rounded-lg" onClick={resetGame}>Play Again</button>
                 
              </div>
            );
    }
}

export default withRouter(WinOrLose);