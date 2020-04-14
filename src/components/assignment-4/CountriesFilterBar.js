import React from "react";
import SearchCountry  from './SearchCountry';
import SelectRegion from './SelectRegion';


class CountriesFilterBar extends React.Component{
    
    render(){
        const { searchUserInput,regionalOptions,selectTheme,onClickRegion,
        onClickSearch } = this.props;
        return(
        <div className="h-1/4 w-full p-5 flex justify-between">
           <SearchCountry
           onClickSearchText={onClickSearch} 
           searchText={searchUserInput}
           selectTheme={selectTheme}
           />
           <SelectRegion
           onClickRegion={onClickRegion}
           selectTheme={selectTheme}
           regionalOptions={regionalOptions}
           />
        </div>
        );
    }
    
}

export default CountriesFilterBar;