import Link from 'next/link';
import {useRouter} from 'next/router';

//import './../styles/navbar.css';
import { navbarStyle } from './../styles/mainStyles';

function setSpotlight(url){
    var spot = 'barLine set--';
    var newLoc = url.split("/");
    spot += newLoc[1];
    return(spot);
}


export default function Navbar(props){
    const router = useRouter()
    return(
        <>
        <nav className="NavbarItems">

            <span className="nav_logo"></span>

            <input type="checkbox" className="menuBtn" id="menuBtn"/>
            <label className="menuIcon" htmlFor="menuBtn">
                <span className="bars"></span>
            </label>

            <ul className="nav_link">
                <li>
                    <Link href="/" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/news" >
                        Noticias
                    </Link>
                </li>
                <li>
                    <Link href="/artists" >
                        Artistas
                    </Link>
                </li>
                <li>
                    <Link href="/potcast" >
                        Podcasts
                    </Link>
                </li>
                <li className={setSpotlight(router.pathname)} id="lineNav"></li>
            </ul>
        </nav>
        <style jsx>{ navbarStyle }</style>
        </>
    );
}
