import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'


import { globalStyles } from './../styles/globalStyles'

export default function MainConteiner(props){
    
    return(
        <main>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="content-type" content="charset=UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Cosmere-latam</title>
                <meta
                    name="description"
                    content="Web del fandom de Brandon Sanderson en latinoamerica."
                />
                <meta 
                    name="Keywords"
                    content="cosmere; cosmere latam; latam; latinoamerica; fandom; brandon; sanderson; fanderson; mistbotn; nacidos de la bruma; stormlight archive; archivo de las tormentas; warbreker; el aliento de los dioces; juramentada"
                />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#317EFB"/>
                <link rel="apple-touch-icon" href="/images/icon.png" />
            </Head>
            <Navbar></Navbar>
            {props.children}
            <Footer></Footer>
            
            <style global jsx>{ globalStyles }</style>
        </main>

    );
}
