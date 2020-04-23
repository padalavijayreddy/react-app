import React from 'react';
import {Link} from 'react-router-dom';
import { NavigationBar,Button } from './headerStyle';

class Header extends React.Component{
    render(){
        return (
            <NavigationBar>
               <Button><Link style={{color:'inherit',textDecoration:'inherit'}} to="/eCommerceHome">Home</Link></Button>
               <Button><Link style={{color:'inherit',textDecoration:'inherit'}} to="/latestProducts">Latest Products</Link></Button>
               <Button><Link style={{color:'inherit',textDecoration:'inherit'}} to="/about">About</Link></Button>
               <Button><Link style={{color:'inherit',textDecoration:'inherit'}} to="/shop">Shop</Link></Button>
               <Button><Link style={{color:'inherit',textDecoration:'inherit'}} to="/contact">Contact</Link></Button>
            </NavigationBar>
            );
    }
}

export default Header;



//65-87-68-83//