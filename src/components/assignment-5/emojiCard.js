import React from "react";
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

class EmojiCard extends React.Component{
    
    onClickEmoji = () => {
        const { id,onClickEmojiCard } = this.props;
        onClickEmojiCard(id);
    }
    
    render(){
        const { selectedTheme,id,isClicked,name,image,onClickEmojiCard } = this.props;
        return(
            <div onClick = { this.onClickEmoji } className={`p-5 flex items-center flex-col shadow-custom m-5 h-64 w-1/4 justify-around rounded-sm ${selectedTheme.emojis}`}>
               <img className="w-40 h-40 rounded-t-lg" src={image} />
               <h1 className="font-lg font-serif"><b>{name}</b></h1>
            </div>
            );
    }
}

export default withRouter(EmojiCard);