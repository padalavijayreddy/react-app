import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    gotoGridScreenIfLoggedIn = () => {
        return (
            <Redirect
            to ={{
                pathname:'/SignInPage',
            }}
            />
        );
    }

    render() {
        if (true) {
            return this.gotoGridScreenIfLoggedIn();
        }
        return (
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
                <Link style={{color:'inherit',textDecoration:'inherit'}} to="/formComponent">FormComponent</Link>
            </div>
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to="/CountriesDashboardApp">CountriesDashboardApp</Link>
            </div>
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to="/RestAPITodoApp">RestAPITodoApp</Link>
            </div>
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to="/LoginPage">LoginPage</Link>
            </div>
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to="/SignInPage">SignInPage</Link>
            </div>
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to="/ProductPage">ProductPage</Link>
            </div>
         {/*<div>
               <Link style={{color:'inherit',textDecoration:'inherit'}} to="/UsersPage">UsersPage</Link>
            </div>
            <div>
               <Link style={{color:'inherit',textDecoration:'inherit'}} to="/EmojiGame">EmojiGame</Link>
            </div>
            <div>
               <Link style={{color:'inherit',textDecoration:'inherit'}} to="/ProviderExample">ProviderExample</Link>
            </div>
            <div>
               <Link style={{color:'inherit',textDecoration:'inherit'}} to="/TodoApp">TodoApp</Link>
            </div>
            <div>
               <Link style={{color:'inherit',textDecoration:'inherit'}} to="/EventsApp">EventsApp</Link>
            </div>
            <div>
               <Link style={{color:'inherit',textDecoration:'inherit'}} to="/GridMemoryGame">GridMemoryGame</Link>
            </div>*/}
        </div>
        );
    }
}


export default Home;
