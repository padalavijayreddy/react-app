import React from "react";
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

const Button = styled.button(
    props => ({
        border:(props.state === 'Dark Theme')?''&&'1px solid black':''&&'1px solid white'
    })
);

class Navbar extends React.Component{
    render(){
        const { score,topScore,selectedTheme,onChangeTheme } = this.props;
        return(
            <div className={`flex justify-between items-center h-1/4 w-full font-serif text-lg shadow-lg p-5 ${selectedTheme.navbar}`}>
               <h1 className="font-sans text-2xl"><b>Emoji Game</b></h1>
               <h3 className="text-xl font-mono"><b>Score:</b>{score}</h3>
               <h3 className="text-xl font-mono"><b>Top Score:</b>{topScore}</h3>
               <Button state={selectedTheme.name} className="border-solid border-2 h-16 w-40 flex justify-center text-lg font-xl font-serif font-bold" onClick={onChangeTheme}>{selectedTheme.name}</Button>
            </div>
            );
    }
}

export default withRouter(Navbar);