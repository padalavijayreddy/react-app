import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { PRODUCT_PAGE_PATH } from '../../ProductPage/constants/RouteConstants';
import { SIGN_IN_PATH } from '../../SignInPage/constants/RouteConstants';
import { PRACTICE_ADVANCED_CONCEPTS_PATH } from '../../constants/RouteConstants';
import './Home.css';

class Home extends React.Component {

    render() {
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
                <Link style={{color:'inherit',textDecoration:'inherit'}} to={SIGN_IN_PATH}>ECommercePage</Link>
            </div>
            <div>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to={PRACTICE_ADVANCED_CONCEPTS_PATH}>PracticeAdvancedConceptRoute</Link>
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
