import React from 'react';
import { MdSearch } from "react-icons/md";
import { observer }  from 'mobx-react';

import themeStore from '../../stores/ThemeStore/index';

@observer
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
        return(
            <form className="h-auto flex justify-center items-center border-gray-600 border-solid border-2 w-1/4" onSubmit={this.handleSubmit} >
             <label className="flex justify-center items-center text-lg"><MdSearch/></label>
             <input className={this.props.selectTheme.style} onChange={this.handleSearchText} value={this.state.text} className="search-button" type="text" placeholder="Search for a country..."/>
            </form>
            );
    }
}

export default SearchCountry ;