import Link from 'next/link';
import Head from 'next/head';
import { fetchNew } from '../../firebase/client';

import MainConteiner from './../../components/main';
import { articleStyles, newSecction } from '../../styles/newStyles'

export default function ReedNews(props){

    /*const router = useRouter()
    const {id}= router.query

    const [newArray, setNew] = useState([])

    useEffect( async() =>{
        await fetchNew(id)
            .then(setNew)
    }, [id]);
    */

    return(
        <MainConteiner>
            <Head>
                <title>Cosmere-latam | { props.title } </title>
            </Head>
            <section className="new">
                <div className="body">
                    <div className="back">
                        <Link href='/news'>&#60; Volver a Noticias</Link>
                    </div>
                    <div className="article">
                        <h1>{ props.title }</h1>
                        <span>Fecha de publicación { props.date }</span>
                        <p>{ props.content }</p>
                    </div>
                </div>
            </section>
            <style jsx>{ articleStyles }</style>
            <style jsx>{ newSecction }</style>
        </MainConteiner>
        
    )
}
ReedNews.getInitialProps = async(ctx) =>{
    const { query } = ctx
    const { id } = query
    const content = await fetchNew(id).then(newArray => {return newArray})
    return content
        
}