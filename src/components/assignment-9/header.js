import React from 'react';
import { observer } from 'mobx-react';
import { FaHeart } from 'react-icons/fa';
import { Button,header,SubHeader,MainHeader } from './StyledComponents/headerStyles';

@observer class Header extends React.Component{
    
    lightDarkModeName = () => {
      const { selectTheme } = this.props;
      return (selectTheme.name === "Light Mode")? 'Light':'Dark';
    } 
     
    render(){
        const { selectTheme, changeTheme, extraLife,level, topLevel, goToNextLevelAndUpdateCells } = this.props;
        
        return(
            <header>
              <MainHeader>
                 <button onClick={goToNextLevelAndUpdateCells}>
                 Top Level: {topLevel}
                 </button>
              </MainHeader>
              <SubHeader>
                <b>Level:  {level}</b>
                <Button 
                state = {selectTheme.name} 
                onClick={changeTheme}>Mode:{this.lightDarkModeName()}
                </Button>
                <b className="text-center"><FaHeart/>{extraLife}</b>
              </SubHeader>
            </header>
            );
    }
}

export default Header;