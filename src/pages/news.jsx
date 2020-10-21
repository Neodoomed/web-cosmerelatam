import React, {Component} from 'react';
import './news.css';
import New from './component/New';



class News extends Component{

    constructor(props) {
        super(props);
        this.state = {
            section: 'all',
            page: 5,
            Result : [],
            isLoading : true
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.getNewsList = this.getNewsList.bind(this);
    }

    getNewsList = () =>{
        const urlApi = `https://cosmere-latam.000webhostapp.com/app/index.php?f=newsListAll&sec=${this.state.section}&page=${this.state.page}`;
        console.log(urlApi);
        fetch(urlApi)
            .then(response => response.json())
            .then(data => this.setState({Result : data, isLoading: false}))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    handleChange = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
            section: event.target.value,
            page: 5,
            Result : [],
            isLoading : true
        });
        //this.getNewsList();
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
                <nav className="category">
                    <input type="radio" name="category" id="category1" value="all" onClick={this.handleChange} checked={this.state.section === "all"}/>
                    <input type="radio" name="category" id="category2" value="news" onClick={this.handleChange} checked={this.state.section === "news"}/>
                    <input type="radio" name="category" id="category3" value="event" onClick={this.handleChange} checked={this.state.section === "event"}/>
                    <input type="radio" name="category" id="category4" value="adds" onClick={this.handleChange} checked={this.state.section === "dds"}/>

                    <label  For="category1">Recientes</label>
                    <label  For="category2">Noticias</label>
                    <label  For="category3">Eventos</label>
                    <label  For="category4">Anuncios</label>
                </nav>
                <div className='newsList'>
                    <ul>
                    {!this.state.isLoading ? (
                        this.state.Result.map(result=>(
                            <New
                                key={result.ID}
                                new={result}
                            />
                        ))
                    ) : (
                    this.getNewsList()
                    )}
                        <il className="more">Mas</il>
                    </ul>
                </div>
            </section>
        )
    }
}
export default News