import React, {Component} from 'react';
import './Style/nonfound.css';

class NonFound extends Component{
    render(){
        return(
            <section className="non">
                <div>
                <h2>404</h2>
                <p>Seccion no encontrada.</p>
                <p>No intentes saltar entre mundos si no conoces las rutas.</p>  
                </div>
            </section>
        )
    }

}

export default NonFound