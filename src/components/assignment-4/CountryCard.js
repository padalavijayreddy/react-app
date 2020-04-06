import React from "react";
import {withRouter} from 'react-router-dom';

class CountryCard extends React.Component{
    
    navigateToCountryDetailsPage = (event) => {
        this.props.history.push(`/CountriesDashboardApp/${this.props.countryObject.alpha3Code}`);
    }
     
    render(){
          const { name,img,population,region,capital } = this.props;
           return (
                   <div onClick={this.navigateToCountryDetailsPage} className="shadow-2xl m-5 w-1/5 flex flex-col justify-between rounded-lg" id={name}>
                       <img className="object-cover w-full h-40 rounded-t-lg" src={img} />
                       <h1 className="font-lg font-serif"><b>{name}</b></h1>
                       <div className="my-6 flex flex-col items-start">
                           <span className="font-lg font-sans"><b>Population:</b> {population}</span>
                           <span className="font-lg font-sans"><b>Region:</b> {region}</span>
                           <span className="font-lg font-sans"><b>Capital:</b> {capital}</span>
                       </div>
                   </div>
                 );
    }
}

export default withRouter(CountryCard);