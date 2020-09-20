import React, {Component} from 'react';
import './home.css';

class Home extends Component{
    render(){
        return(
            <section className="banner">
                <div className="home">
                    <h1 className="titulo">Comere Latam</h1>
                    <p>La web oficial de Cosmere Latam. Donde el fandom del Cosmere de toda latinoamerica se reune.</p>   
                </div>
                <div className="btn_join">
                    <p className="join">Acepta tu investidura y comienza este viaje...</p>
                    <button className="btn-join">Unete</button>
                </div>
            </section>
        )
    }

}

export default Home
