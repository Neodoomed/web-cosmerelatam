import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        
        return(
            <nav className="NavbarItems">
                <div>
                    <span className="nav_logo"></span>
                </div>
                <div className="menu-icon">
                    <span className="bars "></span>
                </div>
                
                <ul className="nav_link item">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index} className="item">
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="item">
                    <button className="btn_login btn btn-outline-info btn-lg">Inciar seción</button>
                </div>
                
            </nav>
        )
    }
}

export default Navbar