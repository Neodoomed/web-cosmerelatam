import './../../styles/sideNews.css';

export default function SliderNews(){
    return(
        <div className="topNews">
            <input type="radio" name="slider" id="slider1"/>
            <input type="radio" name="slider" id="slider2"/>
            <input type="radio" name="slider" id="slider3"/>
            <div className="sliderMain">
                <ul className="slider">
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                </ul>
            </div>
            <nav className="sliderBar">
                <label className="radioSlide" htmlFor="slider1"></label>
                <label className="radioSlide" htmlFor="slider2"></label>
                <label className="radioSlide" htmlFor="slider3"></label>
            </nav>
        </div>
    );
}