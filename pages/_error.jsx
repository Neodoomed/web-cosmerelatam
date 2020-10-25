import MainConteiner from './../components/main';
import './../styles/404.css';

export default function Index(){
    return(
        <MainConteiner>
            <section className="non">
                
                <div>
                <h2>404</h2>
                <p>Seccion no encontrada.</p>
                <p>No intentes saltar entre mundos si no conoces las rutas.</p>  
                </div>
            </section>
        </MainConteiner>
    );
}