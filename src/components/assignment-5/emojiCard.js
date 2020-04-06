import React from "react";
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

class EmojiCard extends React.Component{
    render(){
        const { selectedTheme,id,isClicked,name,image } = this.props;
        console.log(selectedTheme,id,isClicked);
        return(
            <div style={ selectedTheme.emojis } className="flex items-center flex-col shadow-2xl m-5 h-auto w-1/4 justify-between rounded-lg" id={id}>
               <img className="object-cover w-full h-40 rounded-t-lg" src={image} />
               <h1 className="font-lg font-serif"><b>{name}</b></h1>
            </div>
            );
    }
}

export default withRouter(EmojiCard);