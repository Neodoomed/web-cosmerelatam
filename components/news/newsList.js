import Link from 'next/link';
import Router from 'next/router'
//import './../../styles/newsList.css';
import { newStyle } from '../../styles/newStyles'


export default function newList(props){
    //onClick={() => Router.push('/news/[id]', `/news/${result.id}`)}
    //<Link href='news/[id]' as={`/news/${result.id}`} key={result.id}>
    //https://pbs.twimg.com/media/ElYIKfyXUAMUJvi?format=jpg&name=900x900

    var Label = ''
    {props.isLoad ? Label = 'Mas' :  Label = 'Cargando...'}
    return(
        <>
        <div className='newsList'>
            <ul>
                {props.results.map(result=>(

                        <li className='new' key={result.id}>
                            <Link href='news/[id]' as={`/news/${result.id}`}><a>
                                <img src={ result.banner } className='img'/>
                                <div className='content'>
                                    <h3>{ result.title }</h3>
                                    <p>{ result.subTitle }</p>
                                </div>
                                <div className='data'>
                                        <div className='date'>{ result.date }</div>
                                        <div className='section'>{ result.section }</div>
                                </div>
                            </a></Link>
                        </li> 
                    ))
                }
            <li className="btn-black more" onClick={props.more}> { Label } </li>
            </ul>
        </div>
        <style jsx>{ newStyle }</style>
        </>
    )
}
