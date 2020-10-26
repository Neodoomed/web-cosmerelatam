import {globalStyles, loginStyles} from '../styles/shadesmarStyles'

export default function Shadesmar(){
    return(
        <>
        <section className="Shadesmar">
            <div className="main">
                <h1>Has entrado en Shadesmar.</h1>
                <h5>Desde aqui puedes moldar el mundo.</h5>
            </div>
        </section>
        <style jsx global>{globalStyles}</style>
        <style jsx>{loginStyles}</style>
        </>
    );
}