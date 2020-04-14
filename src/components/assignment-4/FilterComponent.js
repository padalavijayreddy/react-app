import React from "react";
import { withRouter } from 'react-router-dom';

import Countries from './Countries';


class FilterComponent extends React.Component{
    
    renderCountries=( countriesList,searchText,selectedRegion )=>{
        const countryElement =[]; 
        countriesList.forEach(eachCountry => {
            if(eachCountry.name.toLowerCase().includes(searchText.toLowerCase()) === true && 'All' === selectedRegion){
                countryElement.push(eachCountry);
            }
            else if(eachCountry.name.toLowerCase().includes(searchText.toLowerCase())=== true && eachCountry.region === selectedRegion){
                countryElement.push(eachCountry);
            }
        });
        console.log(countryElement);
        return countryElement;
     }
     
     render(){
         const { countriesList,searchText,selectedRegion } = this.props;
         const renderCountries = this.renderCountries( countriesList,searchText,selectedRegion );
         return(
            <div>
              <Countries countryList={renderCountries} searchText={searchText}/>
            </div>
             );
     }
}


export default withRouter(FilterComponent);