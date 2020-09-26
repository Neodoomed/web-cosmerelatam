import React, {Component} from 'react';
import './news.css';


class News extends Component{
    render(){
        return(
            <section className="news">
                <div className="topNews">
                    <input type="radio" name="slider" id="slider1"/>
                    <input type="radio" name="slider" id="slider2"/>
                    <input type="radio" name="slider" id="slider3"/>
                    <div className="sliderMain">
                        <ul className="slider">
                            <il>
                                <div className="newsImg"></div>
                                <div className="newsTitle">
                                    <h1>Mensaje 1</h1>
                                </div>
                                <div className="newsText">
                                    <p>Escribo estas palabras en acero, pues todo lo que no esté grabado en metal es indigno de confianza.</p>
                                </div>
                                <div className="newsOrigin">
                                    <p className="date">20/09/20</p>
                                    <p className="origin">Noticias</p>
                                </div>
                            </il>
                            <il>
                                <div className="newsImg"></div>
                                <div className="newsTitle">
                                    <h1>Mensaje 2</h1>
                                </div>
                                <div className="newsText">
                                    <p>Szeth-hijo-hijo-Vallano, sin-verdad de Shinovar, vestía de blanco el día que iba a matar a un rey.</p>
                                </div>
                                <div className="newsOrigin">
                                    <p className="date">20/09/20</p>
                                    <p className="origin">Anuncios</p>
                                </div>
                            </il>
                            <il>
                                <div className="newsImg"></div>
                                <div className="newsTitle">
                                    <h1>Mensaje 3</h1>
                                </div>
                                <div className="newsText">
                                    <p>El honor ha muerto, pero vere que puedo hacer.</p>
                                </div>
                                <div className="newsOrigin">
                                    <p className="date">20/09/20</p>
                                    <p className="origin">Eventos</p>
                                </div>
                            </il>
                        </ul>
                    </div>
                    <nav className="sliderBar">
                        <label className="radioSlide" For="slider1"></label>
                        <label className="radioSlide" For="slider2"></label>
                        <label className="radioSlide" For="slider3"></label>
                    </nav>
                </div>
                <nav className="category">
                    <ul>
                        <il className="select">Recientes</il>
                        <il>Noticias</il>
                        <il>Eventos</il>
                        <il>Anuncios</il>
                    </ul>
                </nav>
                <div className='newsList'>
                    <ul>
                        <il>
                            
                        </il>
                        <il></il>
                        <il></il>
                        <il></il>
                        <il className="more">Mas</il>
                    </ul>
                </div>
                
            </section>
        )
    }
}
export default News