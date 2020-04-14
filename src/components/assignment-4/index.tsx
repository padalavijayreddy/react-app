/*global fetch*/

import React from "react";
import { observer }  from 'mobx-react';
import { withRouter } from 'react-router-dom';

import './index.css';
import  CountriesFilterBar  from './CountriesFilterBar';
import  FilterComponent  from './FilterComponent';
import Header from './Header';

import themeStore from '../../stores/ThemeStore/index';

@observer
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
    
    getCurrentTheme = () => {
        return themeStore.selectedTheme;
    }
  
    setCurrentTheme = (theme) => {
        themeStore.setCurrentTheme(theme);
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
        //const themeStyles = themeStore.themeStyle[themeStore.theme];
        //console.log(themeStyles);
        console.log(this.props);
        return(
            <div className={this.props.selectedTheme.style}>
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