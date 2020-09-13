import React, {Component} from 'react';
import './Noticias.css';

class Noticias extends Component{
    render(){
        return(
            <section className="noticias">
                <h1 className="display-3">Secccion de noticias</h1>
                <div className="news_main">
                    <div className="news_swiper">

                    </div>
                    <div className="news_conteiner">
                        <ul className="news_tab">
                            <li class="tab_item">Ultimas</li>
                            
                        </ul>
                    </div>

                </div>
            </section>
        )
    }

}

export default Noticias