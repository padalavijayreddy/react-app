/*global fetch*/

import React from "react";
import './index.css';
import  CountriesFilterBar  from './CountriesFilterBar.js';
import  FilterComponent  from './FilterComponent.js';
import { withRouter } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Header from './Header.js';


class CountriesDashboardApp extends React.Component{
    
    state = {
        countries : [],
        searchText:'',
        selectedRegion:'All',
    }
    
    async  getCountries ()  {
      let data= await fetch('https://restcountries.eu/rest/v2/all');
      let jsonData=await data.json();
       this.setState({
          countries:jsonData
      });
    }
    
    componentDidMount = () => {
        this.getCountries();
    }
    
    onChangeSearchText = (text) => {
        this.setState({
            searchText:text,
        });
    }
    
    onChangeSelectedRegion = (event) => {
        this.setState({
            selectedRegion:event.target.value,
        });
    }
    
    displayCountries = () => {
        return (
          <FilterComponent countriesList={this.state.countries} searchText = {this.state.searchText} selectedRegion={this.state.selectedRegion}/>
        );
    }
    
    goBack = () =>{
      this.props.history.goBack();
    }
    
    render(){
        return(
            <div style={ this.props.selectedTheme.style }>
              <Header selectTheme = {this.props.selectedTheme} changeTheme = {this.props.onChangeTheme}/>
              <CountriesFilterBar 
                  searchUserInput={this.state.searchText}
                  regionalOptions={['All','Africa','Americas','Asia','Europe','Oceania','Polar','']} 
                  selectRegion={this.state.selectedRegion}
                  selectTheme={this.props.selectedTheme}
                  onClickRegion={this.onChangeSelectedRegion}
                  onClickSearch={this.onChangeSearchText} 
                  />
              {this.displayCountries()}
            </div>
            );
    }
    
}


export default withRouter(CountriesDashboardApp);

/*<button className="flex justify-start items-center h-12 bg-black text-white text-lg w-full" type="button" onClick={this.goBack}><IoMdArrowBack/><b>Go Back</b></button>*/