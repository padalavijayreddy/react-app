/*global fetch*/
import React from "react";

import {withRouter} from 'react-router-dom';
import  Header  from './Header.js';
import { FiArrowLeft } from "react-icons/fi";
import themeStore from '../../stores/ThemeStore/index.js';
import { observer }  from 'mobx-react';

@observer
class CountryDetails extends React.Component{
 
     state = {
      countryDetails:[]
     }
      
     async  getCountries ()  {
      let data= await fetch('https://restcountries.eu/rest/v2/all');
      let jsonData=await data.json();
      let filteredCountries = jsonData.filter(eachObject=>{
       return eachObject.alpha3Code === this.props.match.params.countryId;
      });
     
      this.setState({
       countryDetails:filteredCountries,
      });
     }
    
     componentDidMount = () => {
        this.getCountries();
     }
     
     languagesNamesList = () => {
       return this.state.countryDetails[0].languages.map(eachLanguage => (eachLanguage.name));
     }
     
     renderCountryPage = (event) => {
      this.props.history.push(`/CountriesDashboardApp/${event.target.innerHTML}`);
      this.getCountries();
     }
     
     bordersList = () => {
      return this.state.countryDetails[0].borders.map(country => {
         return<button className="borders-button" onClick={this.renderCountryPage}>{country}</button>;
      });
     }
     
     goBack = () =>{
      this.props.history.push('/CountriesDashboardApp/');
     }
     
     render(){
      const { selectedTheme,onChangeTheme } = this.props;
      console.log(this.props);
      if(this.state.countryDetails.length>0){
       //console.log(this.state.countryDetails[0].borders);
       const languages=this.languagesNamesList();
       const borders = this.bordersList();
       console.log(borders);
        return(
        <div className="bg-gray-400">
             <div>
                <Header selectTheme = {selectedTheme} changeTheme = {onChangeTheme}/>
                <div className={selectedTheme.style} className="h-1/4 w-full p-5 flex flex-col items-start justify-start">
                  <button className="flex text-lg" onClick={this.goBack}><FiArrowLeft/>Go back</button>
                </div>
             </div>
             <div className={selectedTheme.style} className="h-screen flex items-center justify-around">
                <div>
                     <img className="image-tag" src={this.state.countryDetails[0].flag}/>
                </div>
                <div className="country-sub-details">
                     <h1><b>{this.state.countryDetails[0].name}</b></h1>
                     <span><b>Native Name:</b> {this.state.countryDetails[0].nativeName}</span>
                     <span><b>Population:</b> {this.state.countryDetails[0].population}</span>
                     <span><b>Region:</b> {this.state.countryDetails[0].region}</span>
                     <span><b>Sub Region:</b> {this.state.countryDetails[0].subregion}</span>
                     <span><b>Capital:</b> {this.state.countryDetails[0].capital}</span>
                     <span><b>Border Countries</b> :{borders.length>0?borders:<p>No Borders</p>}</span>
                </div>
                <div className="country-subdetails-row-2">
                     <span><b>Top Level Domain :</b> {this.state.countryDetails[0].topLevelDomain}</span>
                     <span><b>Currencies :</b> {this.state.countryDetails[0].currencies[0].name}</span>
                     <span><b>Languages :</b> {languages.join(',')}</span>
                </div>
             </div>
       </div>
      );
      }
      else{
       return <div></div>;
      }
     }
}

export default withRouter(CountryDetails) ;