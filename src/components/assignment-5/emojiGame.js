import React from "react";
import { withRouter } from 'react-router-dom';
import Navbar from './navbar.js';
import EmojiCard from './emojiCard.js';
import HowToPlay from './howToPlay.js';

class EmojiGame extends React.Component{
    
    state = {
        emojis : [{ id:null, isClicked:null, name:null, image:null }],
        score : 0,
        topScore : 0,
        gameState : 'PLAYING'
    }
    
    onEmojiClick = () => {
        
    }
    
    shuffleEmojis = () => {
        
    }
    
    incrementScore = () => {
        
    }
    
    resetGame = () => {
        
    }
    
    setTopScore = () => {
        
    }
    
    onChangeTheme = () => {
        
    }
    
    componentDidMount = () => {
      const namesOfImages = ['Exploding Head','Grinning Face with Sweat','Smiling Face with Heart-Eyes','Smirking Face','Thinking Face','Winking Face','Grinning Face','Crying Face','Astonished Face','Face with Tears of Joy','Star-Struck','Winking Face with Tongue'];
      const listOfChanges = [];
      namesOfImages.forEach((imgName,index)=>{
          index = index + 1;
          listOfChanges.push({ id:index, isClicked:'false', name:imgName, image:`https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${index}.png` });
      });
      this.setState({
          emojis:listOfChanges,
      });
    }
    
    
    displayImages = () => {
        const { emojis } = this.state;
        const { selectedTheme } = this.props;
        return emojis.map((eachCard) =>{
           return <EmojiCard selectedTheme={selectedTheme} id={eachCard.id} isClicked={eachCard.isClicked} 
                name={eachCard.name} image={eachCard.image}/>;
        });
    }
    
    
    render(){
        const { score, topScore } = this.state;
        const { selectedTheme, onChangeTheme } = this.props;
        return (
            <div style={ selectedTheme.style }>
              <Navbar score = { score } topScore = { topScore } selectedTheme = { selectedTheme } onChangeTheme = { onChangeTheme }/>
              <div className="flex justify-between h-full w-full flex-wrap ">{ this.displayImages() }</div>
              <HowToPlay />
            </div>
            );
    }
}


export default withRouter(EmojiGame);