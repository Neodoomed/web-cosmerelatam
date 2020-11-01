//import './../../styles/bannerHome.css';
import {homeStyle} from '../../styles/homeStyles'

export default function BannerHome(){
    return(
        <section className="banner">
            <div className="home">
                <h1 className="titulo">Comere Latam</h1>
                <p>Donde el fandom del Cosmere de toda latinoamerica se reune.</p>
                <p className="onDev">La web se encuentra actualmente en desarrolo.</p>
                <p className="onDev">Puede mostrar error y/o no reflejar el producto final.</p>   
            </div>
            <div className="btn_join">
                <p className="join">Acepta tu investidura y comienza este viaje...</p>
                <button className="btn-join">Unete</button>
            </div>
            <style jsx>{ homeStyle }</style>
        </section>
        
    )
}