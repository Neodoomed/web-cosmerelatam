import React, {Component, lazy, Suspense} from 'react';
import './news.css';


class News extends Component{
    render(){
        return(
            <section className="news">
                <ul className="topNews">
                    <il>
                        <div className="newsImg"></div>
                        <div className="newsTitle">
                            <p>Mensaje 1</p>
                        </div>
                        <div className="newsText">
                            <p>I write these words in steel, for anything not set in metal cannot be trusted.</p>
                        </div>
                        <div className="newsOrigin">
                            <p>Noticias</p>
                        </div>
                    </il>
                    <il>
                        <div></div>
                        <div></div>
                        <div></div>
                    </il>
                    <il>
                        <div></div>
                        <div></div>
                        <div></div>
                    </il>
                </ul>
                <ul className="category">
                    <il>Recientes</il>
                    <il>Noticias</il>
                    <il>Eventos</il>
                    <il>Anuncios</il>
                </ul>
            </section>
            )
    }

}

export default News