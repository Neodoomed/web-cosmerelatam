import React, {Component} from 'react';
import './news.css';


class News extends Component{

    state = {
        section :''
    }

    getNewsList(categoty){
        const urlApi = 'https://cosmere-latam.000webhostapp.com/app/index.php?f=newsListAll&s{this.state.section}';
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

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
                <nav className="category" onChange={this.onChangeValue}>
                    <input type="radio" name="category" id="category1" />
                    <input type="radio" name="category" id="category2" />
                    <input type="radio" name="category" id="category3" />
                    <input type="radio" name="category" id="category4" />

                    <label  For="category1">Recientes</label>
                    <label  For="category2">Noticias</label>
                    <label  For="category3">Eventos</label>
                    <label  For="category4">Anuncios</label>
                </nav>
                <div className='newsList'>
                    <ul>
                        <il>
                            
                        </il>

                        <il className="more">Mas</il>
                    </ul>
                </div>
                
            </section>
        )
    }
}
export default News