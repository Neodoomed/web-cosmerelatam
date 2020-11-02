import Link from 'next/link';
import {useRouter} from 'next/router';

//import './../styles/navbar.css';
import { navbarStyle } from './../styles/mainStyles';

function setSpotlight(url){
    var spot = 'barLine set--'
    var newLoc = url.split("/")
    spot += newLoc[1]
    return(spot)
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
               <Link href="/" ><li>
                        Home
                </li></Link>
                <Link href="/news" ><li>
                        Noticias  
                </li></Link>
                <Link href="/artists" ><li>
                        Artistas  
                </li></Link>
                <Link href="/potcast" ><li>
                    Podcasts
                </li></Link>
                <Link href="/cosmere" ><li>
                    Cosmere
                </li></Link>
                <li className={setSpotlight(router.pathname)} id="lineNav"></li>
            </ul>
        </nav>
        <style jsx>{ navbarStyle }</style>
        <style jsx>{`
            .NavbarItems .barLine{
                display: inline-block;
                box-shadow: none;
                width: 100px;
            }
            .NavbarItems ul li:nth-child(1){
                width: 100px;
            }
            .set--home, .NavbarItems ul li:nth-child(1):hover ~ .barLine{
                width: 100px;
                transform: translate(0);
            }
            .NavbarItems ul li:nth-child(2){
                width: 100px;
            }
            .set--news, .NavbarItems ul li:nth-child(2):hover ~ .barLine{
                width: 100px;
                transform: translate(100px);
            }
            .NavbarItems ul li:nth-child(3){
                width: 100px;
            }
            .set--artists, .NavbarItems ul li:nth-child(3):hover ~ .barLine{
                width: 100px;
                transform: translate(200px);
            }
            .NavbarItems ul li:nth-child(4){
                width: 100px;
            }
            .set--potcast, .NavbarItems ul li:nth-child(4):hover ~ .barLine{
                width: 100px;	
                transform: translate(300px);
            }
            .NavbarItems ul li:nth-child(5){
                width: 100px;
            }
            .set--cosmeremecum, .NavbarItems ul li:nth-child(5):hover ~ .barLine{
                width: 100px;	
                transform: translate(400px);
            }
        `}</style>
        </>
    );
}
