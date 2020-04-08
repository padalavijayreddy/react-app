import React from 'react';
import themeStore from '../../stores/ThemeStore/index.js';
import { observer }  from 'mobx-react';

@observer
class SelectRegion extends React.Component{
    onChangeSelectedRegion = ()=> {
        
    }
    render() {
        const { 
            onClickRegion,
            selectTheme,
            regionalOptions, 
            } =  this.props;
        const regionalList= regionalOptions.map(regions => {
            return <option key={regions} value={regions}>{regions}</option>;
        });
        return(
             <select className={this.props.selectTheme.style} className="h-auto w-1/4 flex justify-center items-center" onChange={onClickRegion}>{regionalList}</select>
            );
    }
}

export default SelectRegion;