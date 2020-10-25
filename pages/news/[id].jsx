import {useRouter} from 'next/router'

import MainConteiner from './../../components/main';
import './../../styles/news.css';

export default function ReedNews(){

    const router = useRouter();
    const {id}= router.query;

    return(
        <MainConteiner>
            <section className="news">
                <h1>Noticia {id}</h1>
            </section>
        </MainConteiner>
    )
}
