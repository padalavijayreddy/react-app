import React from "react";
import { withRouter } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdError } from "react-icons/md";

import CountryCard from './CountryCard';

class Countries extends React.Component{
    renderCountries = (countryList) => {
        const countryElement =[]; 
        countryList.forEach(eachCountry => {
                countryElement.push(<CountryCard name = {eachCountry.name} img  = {eachCountry.flag} population = {eachCountry.population}
                region = {eachCountry.region} capital = {eachCountry.capital} countryObject = {eachCountry}/>);
        });
        console.log(countryElement);
        return countryElement;
     }
    
     render(){
         console.log(this.props);
         const { countryList, searchText } = this.props;
         const renderEachCountry = this.renderCountries(countryList);
         return(
            <div className="flex justify-between h-full w-full flex-wrap ">
             {(renderEachCountry.length>0)?renderEachCountry:(searchText !== '')?<h1 
              className="text-lg h-screen w-full flex justify-center items-center"> <MdError/> Error Occured  </h1>:<h1 className="text-lg h-screen \w-full flex justify-center items-center"> Loading... <AiOutlineLoading3Quarters/></h1>}
            </div>
             );
     }
}

export default withRouter(Countries) ;