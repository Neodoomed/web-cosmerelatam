import React, {Component} from 'react';
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
                            <a href="#"><li className="tab_item">   
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </li></a>

                            <a href="#"><li className="tab_item">
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </li></a>
                            <a href="#"><li className="tab_item">
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </li></a>
                            <a href="#"><li className="tab_item">   
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </li></a>
                            <a href="#"><li className="tab_item">
                                La Web esta en desarrollo, aqui se enlistaran la noticas.
                            </li></a>
                            <li className="tab_more">
                                <a href="#" className="more">
                                    <div className="more_icon"></div>Más
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