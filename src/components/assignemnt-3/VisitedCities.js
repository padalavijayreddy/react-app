import React from 'react';
import {withRouter} from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

let selectedCityList = [];
class VisitedCities extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visitedCities:'',
            selectedCities:'',
            cityOptions:''
        };
    }
    
    
    handleCheckboxClick = (event) => {
        let city = event.target.value;
        if(event.target.checked){
          selectedCityList.push(city);
        }
        else {
            let index = selectedCityList.indexOf(city);
            selectedCityList.splice(index,1);
        }
            this.state.selectedCities=selectedCityList;
    }
    
    renderCityOptions = (event) => {
        return this.props.cityList.map(cities => {
            return <div><input type="checkbox" name ={cities} value={cities} onClick={this.handleCheckboxClick}/>{cities}</div>;
        });
    }
    
    handleSubmit = (event) => {
        this.setState({
           visitedCities : `I have visited these cities ${this.state.selectedCities}` 
        });
        event.preventDefault();
    }
    
    displayVisitedCitiesMessage = () => {
        return this.state.selectedCities!==""? this.state.visitedCities:null;
        
    }
    
    goBack = () =>{
      this.props.history.push('/FormComponent');
     }
    
    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <div class="navigation">
               <button className="navigator-button" type="button" onClick={this.goBack}><IoMdArrowBack/></button>
               <b className="navigator-bar">VisitedCities</b>
            </div>
            <div>
               <h5>VisitedCities</h5>
            </div>
            <label>{this.renderCityOptions()}</label>
            <input type="submit" value="Make your choice" />
            <div>{this.displayVisitedCitiesMessage()}</div>
        </form>
            );
    }
}


export default withRouter(VisitedCities); 