import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
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

const mode = {
    light :{
                id:'0',
                name:'Light Mode',
                style:{
                    backgroundColor:'#fff',
                    color:'black'
                },
                emojis:{
                  backgroundColor:'#fff',
                  color:'black'
                }
            },
    dark  :{
                id:'1',
                name:'Dark Mode',
                style:{
                    backgroundColor:'#2b3945',
                    color:'white'
                },
                emojis:{
                  backgroundColor:"blue",
                  color:'white'
                }
            }
};

class App extends React.Component {
 state = {
        selectedTheme : mode.light
    }
  
 onChangeTheme = () => {
        
        if(this.state.selectedTheme === mode.light){
            this.setState({
                selectedTheme : mode.dark,
            });
        }
        else{
            this.setState({
                selectedTheme : mode.light,
            });
        }
    }
    
 render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/car">
            <CarsList />
          </Route>
          <Route path="/TodoList">
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
            {/*<Header selectTheme = {this.state.selectedTheme} changeTheme = {this.onChangeTheme}/>*/}
            <CountriesDashboardApp selectedTheme = {this.state.selectedTheme} onChangeTheme = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/CountriesDashboardApp/:countryId">
            {/*<Header selectTheme = {this.state.selectedTheme} changeTheme = {this.onChangeTheme}/>*/}
            <CountryDetails selectedTheme = {this.state.selectedTheme} onChangeTheme = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/EmojiGame">
            <EmojiGame selectedTheme = {this.state.selectedTheme} onChangeTheme = {this.onChangeTheme}/>
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
/*export { CarsList };
export { TodoList };
export { FormComponent };
import  Header  from './components/assignment-4/Header.js';
*/
