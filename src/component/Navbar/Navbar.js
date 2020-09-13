import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';

class Navbar extends Component{
    render(){
        
        return(
            <nav className="NavbarItems">
                <div className="nav_logo">
                    
                </div>
                <div className="menu-icon">
                    
                </div>
                <ul className="nav_link">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar