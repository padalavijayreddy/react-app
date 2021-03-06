import React from 'react';
import { MdSearch } from "react-icons/md";
import { observer } from 'mobx-react';

@observer
class SearchBar extends React.Component {

    handleSubmit = (event) => {
        const { onChangeSearchText } = this.props;
        event.preventDefault();
        onChangeSearchText(event.target.value);
    }

    handleSearchText = (event) => {
        const { onChangeSearchText } = this.props;
        onChangeSearchText(event.target.value);
    }

    render() {
        return (
            <form className="h-auto flex justify-center items-center border border-transparent hover:border-gray-600  w-1/4" onSubmit={this.handleSubmit} >
                <label className="flex justify-center items-center text-lg"><MdSearch/></label>
                <input onChange={this.handleSearchText} className="search-button" type="text" placeholder="Search with Name.."/>
            </form>
        );
    }
}

export { SearchBar };
