import React from "react";
import { withRouter } from 'react-router-dom';
import Navbar from './navbar.js';
import EmojiCard from './emojiCard.js';
import HowToPlay from './howToPlay.js';
import WinOrLose from './winOrLose.js';

//let CountClicks = 0;

const mode = {
    light :{
                id:'0',
                name:'Dark Theme',
                backgroundColor:'bg-blue-100 text-white',
                emojis:'bg-white text-black',
                navbar:'bg-white text-black',
                winOrLose:'bg-blue-100 text-black',
                border:'border-black border-solid border-1 text-black bg-white'
            },
    dark  :{
                id:'1',
                name:'Light Theme',
                backgroundColor:'bg-black text-black',
                emojis:'bg-blue-700 text-white',
                navbar:'bg-gray-800 text-white',
                winOrLose:'bg-black text-white',
                border:'border-white border-solid border-1 text-white bg-black'
            }
};


class EmojiGame extends React.Component{
    
    state = {
        emojis : [{ id:null, isClicked:null, name:null, image:null }],
        score : 0,
        topScore : 0,
        gameState : 'PLAYING',
        selectedTheme: mode.light
    }
    
    onEmojiClick = (id) => {
        const { score } = this.state;
        console.log(id);
        let imageObject = this.state.emojis.find((eachImage) => eachImage.id === id);
        console.log(imageObject);
        if(imageObject.isClicked === false){
            imageObject.isClicked = true;
            this.incrementScore();
            if(score == 12){
                this.setState({
                    gameState:'WON'
                });
            }
            else{
                return(
                    this.shuffleEmojis()
                    ); 
            }
        }
        else{
            this.setState({
                gameState:'LOSE'
            });
        }
    }
    
    shuffleEmojis = () => {
        const { emojis } = this.state;
        let i,j,temp;
        for (i = emojis.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         temp = emojis[i];
         emojis[i] = emojis[j];
         emojis[j] = temp;
        }
        this.setState({
           emojis:emojis 
        });
    }
    
    incrementScore = () => {
        this.state.score += 1;
    }
    
    resetGame = () => {
        console.log('hi');
        const { emojis } = this.state;
        const top = this.setTopScore();
        emojis.filter((eachImage) => eachImage.isClicked = false);
        console.log(emojis);
        this.setState({
            gameState:'PLAYING',
            score:0,
            topScore:top,
            //emojis:list
        });
    }
    
    setTopScore = () => {
        const { topScore,score } = this.state;
        if(score>topScore){
            return score;
        }
        else{
            return topScore;
        }
    }
    
    onChangeTheme = () => {
        if(this.state.selectedTheme === mode.light){
            this.setState({
                selectedTheme : mode.dark,
            });
        }
        else{
            this.setState({
                selectedTheme : mode.light,
            });
        }
    }
    
    componentDidMount = () => {
      const namesOfImages = ['Exploding Head','Grinning Face with Sweat','Smiling Face with Heart-Eyes','Smirking Face','Thinking Face','Winking Face','Grinning Face','Crying Face','Astonished Face','Face with Tears of Joy','Star-Struck','Winking Face with Tongue'];
      const listOfChanges = [];
      namesOfImages.forEach((imgName,index)=>{
          index = index + 1;
          listOfChanges.push({ id:index, isClicked:false, name:imgName, image:`https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${index}.png` });
      });
      this.setState({
          emojis:listOfChanges,
      });
    }
    
    
    displayImages = () => {
        const { selectedTheme,emojis } = this.state;
        return emojis.map((eachCard) =>{
           return <EmojiCard onClickEmojiCard = {this.onEmojiClick} selectedTheme={selectedTheme} id={eachCard.id} isClicked={eachCard.isClicked} 
                name={eachCard.name} image={eachCard.image}/>;
        });
    }
    
    
    render(){
        const { selectedTheme, gameState,score, topScore } = this.state;
        console.log(gameState);
        return (
            <div className={selectedTheme.backgroundColor}>
              <Navbar score = { score } topScore = { topScore } selectedTheme = { selectedTheme } onChangeTheme = { this.onChangeTheme }/>
              <div className="flex justify-between h-full w-full flex-wrap ">
              {(gameState === 'PLAYING')? this.displayImages():
                     <WinOrLose emojis={this.emojis} setTopScore={this.setTopScore} resetGame={this.resetGame} gameState={gameState} score = { score } topScore = { topScore } selectedTheme = { selectedTheme } onChangeTheme = { this.onChangeTheme }/>
                 }
              </div>
              <HowToPlay selectedTheme = { selectedTheme } onChangeTheme = { this.onChangeTheme }/>
            </div>
            );
    }
}


export default withRouter(EmojiGame);