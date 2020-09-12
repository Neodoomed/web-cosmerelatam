import React, {Component} from 'react';
import './Noticias.css';

class Noticias extends Component{
    render(){
        return(
            <section className="noticias">
                <div className="jumbotron">
                    <h1 className="display-3">Secccion de noticias.</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"></hr>
                </div>
            </section>
        )
    }

}

export default Noticias