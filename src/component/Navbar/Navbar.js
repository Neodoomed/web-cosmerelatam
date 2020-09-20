import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import {Link} from 'react-router-dom';
import './Navbar.css';

//<button className="btn-lg">Inciar seción</button>

class Navbar extends Component{
    render(){
        
        return(
            <nav className="NavbarItems">
                <span className="nav_logo"></span>
                <input type="checkbox" className="menuBtn" id="menuBtn"/>
                <label className="menuIcon" for="menuBtn">
                    <span className="bars"></span>
                </label>
                <ul className="nav_link">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <li className="barLine newsHome" id="lineNav"></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar