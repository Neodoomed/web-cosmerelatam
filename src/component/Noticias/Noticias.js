import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Noticias.css';

//

class Noticias extends Component{
    render(){
        return(
            <section className="noticias">
                <h1 className="display-3">Noticias</h1>
                <div className="news_main">
                    <div className="news_swiper">

                    </div>
                    <div className="news_conteiner">
                        <ul className="news_tab">
                            <li className="tab_titel">
                                <h2>Mas Recientes</h2><br/>
                            </li>
                            <li className="tab_item"><a href="#">   
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </a></li>

                            <li className="tab_item"><a href="#">
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </a></li>
                            <li className="tab_item"><a href="#">
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </a></li>
                            <li className="tab_item"><a href="#">   
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </a></li>
                            <li className="tab_item"><a href="#">
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </a></li>
                            <li className="tab_more">
                                <a href="#" className="moreIcon">
                                    <Link to="/web-cosmerelatam/news" >Más</Link>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        )
    }

}

export default Noticias