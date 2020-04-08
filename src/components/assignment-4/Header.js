import React from 'react';
import { FaRegMoon } from "react-icons/fa";

class Header extends React.Component{
    render(){
        console.log("header:",this.props);
        const { selectTheme,changeTheme } = this.props;
        return(
        <div className={`${selectTheme.style} flex justify-between mb-1 h-1/4 w-full shadow-2xl`}>
           <button className="h-24 w-56 flex justify-center text-lg font-serif font-bold">Where in the World?</button>
           <button className="h-24 w-48 flex justify-center text-lg font-xl font-serif font-bold" onClick={changeTheme}><FaRegMoon/>{selectTheme.name}</button>
        </div>
            );
    }
}

export default Header ;