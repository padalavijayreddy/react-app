import React from "react";
import { withRouter } from 'react-router-dom';

class HowToPlay extends React.Component{
    render(){
        const { selectedTheme } = this.props;
        return(
            <div className={`flex flex-col justify-around w-full h-32 shadow-lg ${selectedTheme.navbar}`}>
               <h1 className="text-lg font-bold"><b>How To play?</b></h1>
               <b className="text-lg">Get points by clicking on an image but don't click on any image more than once !</b>
            </div>
            );
    }
}

export default withRouter(HowToPlay);