import React from "react";
import themeStore from './stores/ThemeStore';
import {observer} from 'mobx-react';
//import {configure} from 'mobx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import CounterPage from './components/CounterPage/index.js';
import CarsList  from './components/assignemnt-2/index.js';
import TodoList  from './components/todo-list/todosApp.js';
import FormComponent  from './components/assignemnt-3/index.js';
import CountriesDashboardApp from './components/assignment-4/index.js';
import CountryDetails  from './components/assignment-4/CountryDetails';
import Greetings   from './components/assignemnt-3/Greetings.js';
import FavouriteDesert  from './components/assignemnt-3/FavouriteDesert.js';
import VisitedCities  from './components/assignemnt-3/VisitedCities.js';
import YourState  from './components/assignemnt-3/YourState.js';
import DisabledButton from './components/assignemnt-3/DisabledButton.js';
import Home  from './components/Home/Home.js';
import EmojiGame from './components/assignment-5/emojiGame.js';
import CounterApp from './components/assignement-6/index.js';
import TodosList from './components/modxTodo-List/todoList.js';
import TodoApp from './components/TodoApp/todoApp.js';
import EventsApp from './components/EventsApp/index.js';
import ProviderExample from './components/ProviderExample';

@observer class App extends React.Component {
  
  getCurrentTheme = () => {
        return themeStore.theme;
  }
    
  onChangeTheme=()=>{
    themeStore.setCurrentTheme(themeStore.theme);
  }
 
  render(){
    return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/Counterpage">
            <CounterPage />
          </Route>
          <Route exact path="/car">
            <CarsList />
          </Route>
          <Route exact path="/TodoList">
            <TodoList />
          </Route>
          <Route exact path="/FormComponent">
            <FormComponent />
          </Route>
          <Route exact path="/FormComponent/Greetings">
            <Greetings />
          </Route>
          <Route exact path="/FormComponent/FavouriteDesert">
            <FavouriteDesert desertList={['Vanila','ButterScotch','Chocolate','Strawberry','Gulab Jam']} />
          </Route>
          <Route exact path="/FormComponent/VisitedCities">
            <VisitedCities cityList = {['Hyderabad','Shiridi','Mumbai','Delhi','Velivennu']} />
          </Route>
          <Route exact path="/FormComponent/YourState">
            <YourState stateList = {['AndhraPradesh','Telangana','Kerala','Karnataka','Delhi','MadhyaPradesh','ArunachalaPradesh']}/>
          </Route>
          <Route exact path="/FormComponent/DisabledButton">
           <DisabledButton />
          </Route>
          <Route exact path="/CountriesDashboardApp">
            <CountriesDashboardApp selectedTheme = {this.getCurrentTheme()} onChangeTheme = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/CountriesDashboardApp/:countryId">
            <CountryDetails selectedTheme = {this.getCurrentTheme()} onChangeTheme = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/EmojiGame">
            <EmojiGame />
          </Route>
          <Route exact path="/ProviderExample">
            <ProviderExample />
          </Route>
          <Route exact path="/TodosList">
            <TodosList />
          </Route>
          <Route exact path="/TodoApp">
            <TodoApp />
          </Route>
          <Route exact path="/EventsApp">
            <EventsApp />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
 }
}

export default (App);
