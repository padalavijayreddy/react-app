import React from 'react';
import { FaRegMoon } from "react-icons/fa";

class Header extends React.Component{
    render(){
        console.log(this.props);
        const { selectTheme,changeTheme } = this.props;
        return(
        <div className="flex justify-between mb-1 h-1/4 w-full shadow-2xl" style={ selectTheme.style } >
           <button className="h-24 w-56 flex justify-center text-lg font-serif font-bold" style={ selectTheme.style }>Where in the World?</button>
           <button className="h-24 w-48 flex justify-center text-lg font-xl font-serif font-bold" style={ selectTheme.style } onClick={changeTheme}><FaRegMoon/>{selectTheme.name}</button>
        </div>
            );
    }
}

export default Header ;