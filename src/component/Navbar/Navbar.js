import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import {Link} from 'react-router-dom';
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
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button className="btn_login btn btn-outline-info btn-lg">Inciar seción</button>
                </div>
            </nav>
        )
    }
}

export default Navbar