import React from 'react';
import { MdSearch } from "react-icons/md";

class SearchCountry extends React.Component{
    state = {
        text :"",
    }
    
    handleSubmit = (event) => {
        const { onClickSearchText } = this.props;
        event.preventDefault();
        onClickSearchText(this.state.text);
    }
    
    handleSearchText = (event) => {  
        this.setState({
            text:event.target.value
        });
    }
    
    render(){
        const { selectTheme } = this.props;
        return(
            <form className="h-auto flex justify-center items-center border-gray-600 border-solid border-2 w-1/4" onSubmit={this.handleSubmit} >
             <label className="flex justify-center items-center text-lg"><MdSearch/></label>
             <input onChange={this.handleSearchText} value={this.state.text} className="search-button" type="text" style={ selectTheme.style } placeholder="Search for a country..."/>
            </form>
            );
    }
}

export default SearchCountry ;