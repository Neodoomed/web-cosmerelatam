import React, {Component} from 'react';
import {SocialItems} from "./Socials";
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <section className="Footer">
                <div>
                    <ul className="social">
                        {SocialItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        <div className={item.cIcon}></div>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <hr className="line_1"></hr>
                    <p className="copyright">©2020 diseñado y programado por Neodoom Xardax.</p>
                </div>
            </section>
        )
    }

}

export default Footer
