import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home(){
  return(
     <div className="Home-navigation">
       <h4>
         HOME
       </h4>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/car">CarApp</Link>
       </div>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/CounterApp">CounterApp</Link>
       </div>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/TodoList">TodoList</Link>
       </div>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/FormComponent">FormComponent</Link>
       </div>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/CountriesDashboardApp">CountriesDashboardApp</Link>
       </div>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/EmojiGame">EmojiGame</Link>
       </div>
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/ProviderExample">ProviderExample</Link>
       </div>
       {/*<div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/TodoApp">TodoApp</Link>
       </div>*/}
       {/*<div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/EventsApp">EventsApp</Link>
       </div>*/}
       <div>
         <Link style={{color:'inherit',textDecoration:'inherit'}} to="/GridMemoryGame">GridMemoryGame</Link>
       </div>
    </div>
    );
}