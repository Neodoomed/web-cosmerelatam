import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { loginWithGoogle, onAuthStateChanged } from '../firebase/client'

//import './../styles/navbar.css';
import { navbarStyle } from './../styles/mainStyles';
import LoginPopUp from './login/loginPopup';
import UserPopUp from './login/userPopup';

const setSpotlight = (url) =>{
    var spot = 'barLine set--'
    var newLoc = url.split("/")
    spot += newLoc[1]
    return(spot)
}


export default function Navbar(props){
    const router = useRouter()

    const [showLogin, setShowLogin] = useState(false);
    const toggleLogin = () =>{
        setShowLogin(!showLogin);
    }

    const [login, setLogin] = useState(null);
    const handleClickG = () =>{
        loginWithGoogle().then(user =>{
            console.log(user);
            setLogin(user);
            toggleLogin();
        }).catch( err => {
            console.log(err);
        });
    }
    useEffect(() => {
        onAuthStateChanged(setLogin);
    }, [] );

    return(
        <>
        {
            login === null ?
                <LoginPopUp showMe={ showLogin } toggle={ toggleLogin } google={ handleClickG }/>
            :
                <UserPopUp showMe={ showLogin } toggle={ toggleLogin } />
        }
        <nav className="NavbarItems">

            <span className="nav_logo"></span>
            
            <input type="checkbox" className="menuBtn" id="menuBtn"/>
            <label className="menuIcon" htmlFor="menuBtn">
                <span className="bars"></span>
            </label>

            <ul className="nav_link">
                <li className="link"><Link href="/" >
                    <a>Home</a>
                </Link></li>
                <li className="link"><Link href="/news" >
                    <a>Noticias</a>
                </Link></li>
                <li className="link"><Link href="/artists" >
                    <a>Artistas</a>
                </Link></li>
                <li className="link"><Link href="/potcast" >
                    <a>Podcasts</a>
                </Link></li>
                <li className="link"><Link href="/cosmere" >
                    <a>Cosmere</a>
                </Link></li>
                <li className={setSpotlight(router.pathname)} id="lineNav"></li>
            </ul>
            {
                login === null ?
                 <button className="btn_login" onClick={toggleLogin}>
                    <span>Iniciar seción</span>
                    <img src="/images/icons/user.png"/>
                </button>
                :
                <button className="btn_login logout" onClick={toggleLogin}>
                    <span>{login.username}</span>
                    <img src={login.avatar} className="logout" />
                </button>
            }
        </nav>
        <style jsx>{ navbarStyle }</style>
        <style jsx>{`
            
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
