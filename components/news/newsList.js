
import Link from 'next/link';
import Router from 'next/router';
import './../../styles/newsList.css';


export default function newList(props){
    
    const handleClick = (event) =>{
        event.preventDefault();
        Router.push('/news/[id]', `/news/${event.target.key}`)
    }

    return(
        <>
        <div className='newsList'>
            <ul>
                {props.results.map(result=>(
                        <li className='new' key={result.ID} onClick={() => Router.push('/news/[id]', `/news/${result.ID}`)}>
                                <img src='' className='img'/>
                                <div className='content'>
                                    <div className='title'>
                                    <h5>{result.Title}</h5>
                                    </div>
                                    <div className='text'>
                                        <p>{result.News}</p>
                                    </div>
                                    <div className='data'>
                                        <div className='date'>{result.Date}</div>
                                        <div className='section'>{result.Section}</div>
                                    </div>
                                </div>
                        </li>
                    ))
                }
                <li className="more">Mas</li>
            </ul>
        </div>
        </>
    )
}
