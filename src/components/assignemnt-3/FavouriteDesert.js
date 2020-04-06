import React from 'react';
import {withRouter} from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

class FavouriteDesert extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedDessert : '',
            favoriteDessert : '',
        };
    }
    
    handleUserInput = (event) => {
        this.setState({
            selectedDessert : event.target.value
        });
    }
    
    renderDessertOptions = () => {
        return this.props.desertList.map(items=>{
            return <div><input type="radio" value={items} onChange={this.handleUserInput} name="desert"/>{items}</div>;
        });
    }
    
    handleSubmit = (event) => {
        console.log(this.state.selectedDessert);
        this.setState({ 
            favoriteDessert : `My Favourite desert is ${this.state.selectedDessert}`
        });
        event.preventDefault();
    }
    
    displayMessage = () => {
        return this.state.favoriteDessert;
    }
    
    goBack = () =>{
      this.props.history.push('/FormComponent');
     }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <div class="navigation">
               <button className="navigator-button" type="button" onClick={this.goBack}><IoMdArrowBack/></button>
               <b className="navigator-bar">FavouriteDesert</b>
              </div>
              <div>
                 <h5>What is your Favourite Desert?</h5>
              </div>
              <label>{this.renderDessertOptions()}</label>
              <input type="submit" value="Make your choice"/>
              <div>{this.displayMessage()}</div>
            </form>
            );
    }
}

export default withRouter(FavouriteDesert);