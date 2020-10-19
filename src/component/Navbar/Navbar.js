import React from 'react';
import {MenuItems} from "./MenuItems";
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './Navbar.css';

//<button className="btn-lg">Inciar seción</button>


function setSpotlight(url){
    var spot = 'barLine set--';
    var newLoc = url.split("/");
    spot += newLoc[1];
    return(spot);
}


function Navbar(){
    const location = useLocation();

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
                    <li className={setSpotlight(location.pathname)} id="lineNav"></li>
                    
                </ul>
            </nav>
        );
    
}

export default Navbar