import React from 'react';

class SelectRegion extends React.Component{
    onChangeSelectedRegion = ()=> {
        
    }
    render() {
        const { 
            onClickRegion,
            //selectRegion,
            selectTheme,
            regionalOptions, 
            } =  this.props;
        const regionalList= regionalOptions.map(regions => {
            return <option key={regions} value={regions}>{regions}</option>;
        });
        return(
             <select className="h-auto w-1/4 flex justify-center items-center" style={ selectTheme.style } onChange={onClickRegion}>{regionalList}</select>
            );
    }
}

export default SelectRegion;