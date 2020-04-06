import React from "react";
import { withRouter } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";

class Navbar extends React.Component{
    render(){
        const { score,topScore,selectedTheme,onChangeTheme } = this.props;
        return(
            <div className="flex justify-between items-center h-1/4 w-full font-serif text-lg shadow-lg">
               <h1><b>Emoji Game</b></h1>
               <h3><b>Score:</b>{score}</h3>
               <h3><b>Top Score:</b>{topScore}</h3>
               <button className="h-24 w-48 flex justify-center text-lg font-xl font-serif font-bold" onClick={onChangeTheme}><FaRegMoon/>{selectedTheme.name}</button>
            </div>
            );
    }
}

export default withRouter(Navbar);